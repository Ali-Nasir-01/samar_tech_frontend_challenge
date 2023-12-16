<template>
  <div>
    <div
      v-if="filteredData && filteredData.length > 0"
      class="grid grid-cols-12 lg:grid-cols-3 gap-4"
    >
      <ProductView
        v-for="(item, key) in filteredData"
        :key="key"
        :item="item"
        class="lg:col-span-1 sm:col-span-6 col-span-12"
      />
    </div>
    <div v-else class="text-center">نتیجه‌ای یافت نشد</div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/apis";
import { useProductsStore } from "@/stores/products";

const { $fetch } = useNuxtApp();
const {
  public: { products },
} = useRuntimeConfig();
const { getCategories, getSort, getSearch } = useFilters();
const store = useProductsStore();

// Category filter handle client-side because API does'nt support multiple category filter
const dataBasedOnCategory = computed(() => {
  if (getCategories.value.length > 0 && productsList.value) {
    return productsList.value.filter((item) =>
      getCategories.value.includes(item.category)
    );
  }
  return productsList.value;
});

const sortedData = computed(() => {
  if (getSort.value) {
    let sortValue = getSort.value.split("-");
    let sorted = dataBasedOnCategory.value?.sort((a, b) => {
      return a.rating[sortValue[0]] - b.rating[sortValue[0]];
    });
    if (sortValue[1] === "desc") {
      sorted = sorted?.reverse();
    }
    return sorted;
  }

  return dataBasedOnCategory.value;
});

// Filter based on search words
const filteredData = computed(() => {
  if (getSearch.value.length === 0) return sortedData.value;
  return sortedData.value?.filter((item) => {
    for (const word of getSearch.value) {
      if (item.title.includes(word)) {
        return true;
      }
    }
    return false;
  });
});

const { data: productsList } = await useAsyncData<IProduct[]>(products, () =>
  $fetch(products)
);
store.fillProducts(productsList.value);
</script>
