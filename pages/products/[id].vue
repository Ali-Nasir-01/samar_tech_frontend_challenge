<template>
  <div>
    <!-- BreadCrumb -->
    <div class="flex items-center">
      <NuxtLink to="/products">
        <SvgRender icon="home" width="27" color="#6783A0" />
      </NuxtLink>
      <SvgRender
        icon="arrow-down"
        width="21"
        color="#6783A0"
        class="rotate-90 mx-4"
      />
      <NuxtLink class="text-[#6783A0] font-[500] text-lg" to="/products">
        لیست محصولات
      </NuxtLink>
      <SvgRender
        icon="arrow-down"
        width="21"
        color="#6783A0"
        class="rotate-90 mx-4"
      />
      <span class="text-[#6783A0] font-[500] text-lg">
        {{ product?.title || "-" }}
      </span>
    </div>
    <ProductDetailsView :product="product" class="mt-7" />
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/apis";

const {
  public: { singleProduct },
} = useRuntimeConfig();
const { $fetch } = useNuxtApp();
const route = useRoute();
const action = setApi(singleProduct, String(route.params.id));
const { data: product } = await useAsyncData<IProduct>(action, () =>
  $fetch(action)
);

useHead({
  title: "محصول",
});
</script>
