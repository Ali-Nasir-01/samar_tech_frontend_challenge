<template>
  <div class="bg-[#FCE5EE] rounded-full py-2 px-3 flex items-center">
    <slot />
    <SvgRender
      icon="close"
      width="18"
      class="mr-2 hover:cursor-pointer"
      @click="emit('close')"
    />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>
