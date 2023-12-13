<template>
  <div v-if="product">
    <VCard>
      <h3 class="text-xl font-bold">
        {{ product.title }}
      </h3>
      <img
        :src="product.image"
        :alt="product.title"
        class="mx-auto h-[350px] mt-7"
      />
    </VCard>
    <VCard class="mt-6">
      <h3 class="text-xl font-bold mb-2">مشخصات فنی</h3>
      <div
        v-for="(item, index) in tableItems"
        :key="index"
        class="mt-4 grid grid-cols-12 gap-4 w-full"
      >
        <div
          class="col-span-2 w-full p-4 bg-[#eef0f3] rounded-r-2xl text-[#57728E] flex items-center"
        >
          {{ item.title }}
        </div>
        <div
          class="col-span-10 w-full p-4 bg-[#eef0f3] rounded-l-2xl flex items-center text-lg"
        >
          {{ item.value }}
        </div>
      </div>
    </VCard>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/apis";

interface IProps {
  product: IProduct | null;
}

interface ITableItems {
  title: string;
  value: number | string;
}

const props = defineProps<IProps>();
const tableItems = ref<ITableItems[]>([]);

const fillTable = () => {
  if (props.product) {
    tableItems.value.push(
      {
        title: "قیمت",
        value: `${formatter.format(props.product.price)} تومان`,
      },
      {
        title: "توضیحات",
        value: props.product.description,
      },
      {
        title: "دسته‌بندی",
        value: props.product.category,
      },
      {
        title: "رتبه",
        value: props.product.rating.rate,
      },
      {
        title: "تعداد",
        value: formatter.format(props.product.rating.count),
      }
    );
  }
};

watch(
  () => props.product,
  () => {
    fillTable();
  },
  { immediate: true }
);
</script>
