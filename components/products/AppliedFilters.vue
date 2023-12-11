<template>
  <VCard v-if="isVisible">
    <div class="flex items-center">
      <span class="ml-auto"> فیلترهای اعمال شده </span>
      <div class="flex items-center">
        <VChip
          v-for="(item, index) in searchInstance"
          :key="index"
          class="mx-1"
          @close="removeSearchKey(index)"
        >
          <SvgRender icon="search" class="ml-2" />
          <div class="flex items-center">
            {{ item }}
          </div>
        </VChip>
        <VChip
          v-for="(item, index) in categoriesInstance"
          :key="index"
          class="mx-1"
          @close="removeCategory(index)"
          >{{ item }}</VChip
        >
      </div>
    </div>
  </VCard>
</template>

<script setup lang="ts">
const { getCategories, getSearch, updateCategoryFilter, updateSearchFilter } =
  useFilters();
const categoriesInstance = ref(getCategories.value);
const searchInstance = ref(getSearch.value);

const isVisible: ComputedRef<boolean> = computed(
  () => [...getCategories.value, ...getSearch.value].length > 0
);

const removeSearchKey = (index: number) => {
  searchInstance.value.splice(index, 1);
  updateSearchFilter(searchInstance.value, false);
};

const removeCategory = (index: number) => {
  categoriesInstance.value.splice(index, 1);
  updateCategoryFilter(categoriesInstance.value);
};

watch(getCategories, (newVal) => {
  categoriesInstance.value = newVal;
});

watch(getSearch, (newVal) => {
  searchInstance.value = newVal;
});
</script>
