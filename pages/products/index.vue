<template>
  <div>here</div>
</template>

<script setup>
const { $fetch } = useNuxtApp();

onMounted(() => {
  $fetch("/products");
});
</script>
