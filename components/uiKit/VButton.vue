<template>
  <button
    class="font-bold px-7 h-[45px]"
    :class="[
      outline
        ? `border-solid border-2 border-[#E9EDF5] text-${color}`
        : `bg-${color} hover:${color}`,
      outline ? '' : textColor,
      rounded,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  color?: string;
  textColor?: string;
  rounded?: string;
  outline?: boolean;
}

withDefaults(defineProps<IProps>(), {
  color: "primary",
  textColor: "text-white",
  rounded: "rounded",
  outline: false,
});
</script>
