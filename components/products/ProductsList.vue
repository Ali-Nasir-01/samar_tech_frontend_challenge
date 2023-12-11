<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <ProductView
        v-for="(item, key) in filteredData"
        :key="key"
        :item="item"
        class="col-span-1"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/apis";

const { $fetch } = useNuxtApp();
const {
  public: { products },
} = useRuntimeConfig();
const { getCategories, getSort } = useFilters();

// Category filter handle client-side because API does'nt support multiple category filter
const filteredData = computed(() => {
  if (getCategories.value.length > 0 && data.value) {
    return data.value.filter((item) =>
      getCategories.value.includes(item.category)
    );
  }
  return data.value;
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
