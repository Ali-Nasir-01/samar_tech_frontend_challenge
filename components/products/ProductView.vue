<template>
  <VCard class="select-none">
    <img :src="item.image" :alt="item.title" class="h-[180px] mx-auto" />
    <h4 class="text-secondary font-bold mt-5">
      {{ item.title }}
    </h4>
    <VButton class="w-full mt-5 h-[40px]" rounded="rounded-2xl" outline>
      <div class="flex align-center justify-center">
        مشاهده جزئیات
        <SvgRender icon="left-arrow" color="#E20054" width="18" class="mr-1" />
      </div>
    </VButton>
  </VCard>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/apis";

interface IProps {
  item: IProduct;
}

defineProps<IProps>();
</script>

<style scoped lang="scss">
h4 {
  direction: ltr !important;
  text-overflow: ellipsis;
  overflow-y: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
