<template>
  <button
    class="font-bold px-7 h-[45px]"
    :class="[`bg-${color}`, `hover:${color}`, textColor, rounded]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  color: string;
  textColor: string;
  rounded: string;
}

withDefaults(defineProps<IProps>(), {
  color: "primary",
  textColor: "text-white",
  rounded: "rounded",
});
</script>
