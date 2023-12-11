<template>
  <div>
    <div class="grid grid-cols-3 gap-4">
      <ProductView
        v-for="(item, key) in data"
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

const { data } = await useAsyncData<IProduct[]>("products", () =>
  $fetch(products)
);
</script>
