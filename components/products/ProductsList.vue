<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { $fetch } = useNuxtApp();

const { data } = await useAsyncData("products", () => $fetch("/products"));
</script>
