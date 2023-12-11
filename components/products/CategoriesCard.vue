<template>
  <VCard class="my-4">
    <div
      class="flex items-center justify-between"
      :class="[isCategoryVisible ? 'mb-3' : '']"
    >
      <h3 class="text-[#445A74]">دسته‌بندی</h3>
      <SvgRender
        icon="arrow-down"
        width="20"
        class="hover:cursor-pointer duration-100"
        :class="[isCategoryVisible ? '' : 'rotate-180']"
        @click="isCategoryVisible = !isCategoryVisible"
      />
    </div>
    <div v-if="isCategoryVisible" class="select-none">
      {{ data }}
    </div>
  </VCard>
</template>

<script setup lang="ts">
const {
  public: { categories },
} = useRuntimeConfig();
const { $fetch } = useNuxtApp();
const isCategoryVisible = shallowRef<boolean>(true);

const { data } = useAsyncData<string[]>("categories", () => $fetch(categories));
</script>
