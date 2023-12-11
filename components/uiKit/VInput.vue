<template>
  <div>
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <SvgRender icon="search" color="#E20054" />
      </div>
      <div
        class="absolute h-7 start-9 mt-3 w-[1px] rounded-full bg-[#D1DBE8]"
      ></div>
      <input
        type="search"
        id="search"
        class="block w-full p-4 ps-12 text-sm text-gray-900 border border-primary rounded-2xl bg-gray-50 focus:ring-primary focus:border-primary"
        placeholder="جستجو"
        required
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
