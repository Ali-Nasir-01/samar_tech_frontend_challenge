<template>
  <div>
    <div
      v-if="filteredData && filteredData.length > 0"
      class="grid grid-cols-3 gap-4"
    >
      <ProductView
        v-for="(item, key) in filteredData"
        :key="key"
        :item="item"
        class="col-span-1"
      />
    </div>
    <div v-else class="text-center">نتیجه‌ای یافت نشد</div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/apis";

const { $fetch } = useNuxtApp();
const {
  public: { products },
} = useRuntimeConfig();
const { getCategories, getSort, getSearch } = useFilters();

// Category filter handle client-side because API does'nt support multiple category filter
const dataBasedOnCategory = computed(() => {
  if (getCategories.value.length > 0 && data.value) {
    return data.value.filter((item) =>
      getCategories.value.includes(item.category)
    );
  }
  return data.value;
});

// Filter based on search words
const filteredData = computed(() => {
  if (getSearch.value.length === 0) return dataBasedOnCategory.value;
  return dataBasedOnCategory.value?.filter((item) => {
    for (const word of getSearch.value) {
      if (item.title.includes(word)) {
        return true;
      }
    }
    return false;
  });
});

const { data, refresh } = await useAsyncData<IProduct[]>(products, () =>
  $fetch(products, {
    query: {
      sort: getSort.value,
    },
  })
);

watch(getSort, () => {
  refresh();
});
</script>
