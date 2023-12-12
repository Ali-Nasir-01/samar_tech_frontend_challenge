<template>
  <div></div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/apis";

const {
  public: { singleProduct },
} = useRuntimeConfig();
const { $fetch } = useNuxtApp();
const route = useRoute();
const action = setApi(singleProduct, String(route.params.id));
const { data: product } = useAsyncData<IProduct>(action, () => $fetch(action));
</script>
