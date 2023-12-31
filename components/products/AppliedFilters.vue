<template>
  <VCard v-if="isVisible">
    <div class="flex items-center">
      <span class="ml-auto text-[#253343]"> فیلترهای اعمال شده </span>
      <div class="flex items-center">
        <VChip v-if="sortInstance" class="mx-1" @close="removeSort">
          <div class="flex items-center">
            <SvgRender
              icon="sort"
              color="#000"
              width="22"
              class="ml-1"
              :class="[
                sortInstance.split('-')[1] === 'desc' ? '' : 'rotate-180',
              ]"
            />
            {{ sortText }}
          </div>
        </VChip>
        <VChip
          v-for="(item, index) in searchInstance"
          :key="index"
          class="mx-1"
          @close="removeSearchKey(index)"
        >
          <SvgRender icon="search" class="ml-2" color="#000" />
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
const {
  getCategories,
  getSort,
  getSearch,
  updateCategoryFilter,
  updateSearchFilter,
  updateSortFilter,
} = useFilters();
const categoriesInstance = ref(getCategories.value);
const searchInstance = ref(getSearch.value);
const sortInstance = ref(getSort.value);

const sortTranslate = {
  rate: "رتبه",
  count: "تعداد",
};
const sortText = computed(() => {
  if (sortInstance.value) {
    let split = sortInstance.value.split("-");
    return `${sortTranslate[split[0]]}`;
  }
  return null;
});

const isVisible: ComputedRef<boolean> = computed(
  () =>
    [...getCategories.value, ...getSearch.value].length > 0 ||
    getSort.value !== null
);

const removeSearchKey = (index: number) => {
  searchInstance.value.splice(index, 1);
  updateSearchFilter(searchInstance.value, false);
};

const removeCategory = (index: number) => {
  categoriesInstance.value.splice(index, 1);
  updateCategoryFilter(categoriesInstance.value);
};

const removeSort = () => {
  updateSortFilter(undefined);
};

watch(getCategories, (newVal) => {
  categoriesInstance.value = newVal;
});

watch(getSearch, (newVal) => {
  searchInstance.value = newVal;
});

watch(getSort, (newVal) => {
  sortInstance.value = newVal;
});
</script>
