<template>
  <VCard class="my-4">
    <div
      class="flex items-center justify-between"
      :class="[isCategoryVisible ? 'mb-6' : '']"
    >
      <h3 class="text-[#445A74]">دسته‌بندی</h3>
      <SvgRender
        icon="arrow-down"
        width="20"
        class="hover:cursor-pointer duration-100"
        :class="[isCategoryVisible ? '' : 'rotate-180']"
        @click="isCategoryVisible = !isCategoryVisible"
      />
    </div>
    <div v-if="isCategoryVisible" class="select-none">
      <div
        v-for="(item, index) in categoriesList"
        :key="item"
        class="mt-3 flex items-center"
      >
        <label class="inline-flex items-center cursor-pointer">
          <input
            v-model="selectedCategories"
            type="checkbox"
            :value="item"
            class="accent-primary w-[18px] h-[18px] ml-2"
          />
          {{ item }}
        </label>
        <div
          v-if="categoriesItem"
          class="p-2 w-10 h-10 text-center rounded-2xl text-white mr-auto"
          :class="[
            selectedCategories.includes(item) ? 'bg-primary' : 'bg-[#141928]',
          ]"
        >
          {{ categoriesItem[index] }}
        </div>
      </div>
    </div>
  </VCard>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/stores/products";

const {
  public: { categories },
} = useRuntimeConfig();
const { $fetch } = useNuxtApp();
const { updateCategoryFilter, getCategories } = useFilters();
const store = useProductsStore();

const isCategoryVisible = shallowRef<boolean>(true);
const selectedCategories = ref<string[]>(getCategories.value);
const categoriesItem = computed(() => {
  if (!store.products || !categoriesList.value) return null;

  let result = [];

  for (const category of categoriesList.value) {
    result.push(
      store.products.filter((item) => item.category === category).length
    );
  }
  return result;
});

const { data: categoriesList } = useAsyncData<string[]>("categories", () =>
  $fetch(categories)
);

watch(selectedCategories, () => {
  // Update URL query
  updateCategoryFilter(selectedCategories.value);
});

watch(getCategories, (newVal) => {
  selectedCategories.value = newVal;
});
</script>
