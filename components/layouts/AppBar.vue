<template>
  <header class="w-full bg-[#fff] py-6 rounded-b-lg shadow">
    <nav class="container mx-auto flex item-baseline mt-3 relative">
      <div class="flex justify-around w-[600px] mx-auto">
        <template v-for="item in items" :key="item.text">
          <SvgRender
            :icon="item.icon"
            class="-mt-4 -ml-4"
            :color="item.link === path ? '#E20054' : undefined"
            width="20"
          />
          <NuxtLink
            :to="item.link"
            :class="[item.link === path ? 'text-primary' : '']"
          >
            {{ item.text }}
            <div
              v-if="path === item.link"
              class="bg-primary w-[8px] h-[8px] rounded-full mt-2 mx-auto"
            ></div>
          </NuxtLink>
        </template>
      </div>
      <VButton class="-mt-3 absolute left-0" rounded="rounded-2xl">
        <div class="flex item-center">
          تماس
          <SvgRender icon="phone" color="#fff" width="20" class="mr-3" />
        </div>
      </VButton>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const path = computed(() => route.path);

const items = [
  {
    text: "لیست محصولات",
    link: "/products",
    icon: "products",
  },
  {
    text: "دریافت مشاوره",
    link: "/",
    icon: "book",
  },
  {
    text: "سوالات متداول",
    link: "/",
    icon: "question",
  },
  {
    text: "تماس با ما",
    link: "/",
    icon: "phone",
  },
];
</script>
