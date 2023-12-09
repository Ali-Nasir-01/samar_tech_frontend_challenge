<template>
  <div>تست</div>
</template>

<script setup>
const { $fetch } = useNuxtApp();

onMounted(() => {
  $fetch("/products");
});
</script>
