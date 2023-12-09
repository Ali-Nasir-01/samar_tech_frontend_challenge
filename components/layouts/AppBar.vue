<template>
  <header class="w-full bg-[#fff] py-6 rounded-b-lg shadow">
    <div class="container mx-auto flex justify-around max-w-[550px] mt-3">
      <template v-for="item in items" :key="item.text">
        <SvgRender
          :icon="item.icon"
          class="mt-1 -ml-5"
          :color="item.link === path ? '#E20054' : undefined"
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
    link: "/#",
    icon: "book",
  },
  {
    text: "سوالات متداول",
    link: "/#",
    icon: "question",
  },
  {
    text: "تماس با ما",
    link: "/#",
    icon: "phone",
  },
];
</script>
