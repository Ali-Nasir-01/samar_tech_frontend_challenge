<template>
  <div>
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <svg
          class="w-4 h-4 text-primary"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
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
