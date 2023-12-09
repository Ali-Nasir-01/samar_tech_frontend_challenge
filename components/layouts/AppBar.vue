<template>
  <header class="w-full bg-[#fff] py-6 rounded-b-lg shadow">
    <div class="container mx-auto flex justify-around max-w-[550px] mt-3">
      <NuxtLink
        v-for="item in items"
        :key="item.text"
        :to="item.link"
        :class="[item.link === path ? 'text-primary' : '']"
      >
        {{ item.text }}
        <div
          v-if="path === item.link"
          class="bg-primary w-[8px] h-[8px] rounded-full mt-2 mx-auto"
        ></div>
      </NuxtLink>
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
    icon: "",
  },
  {
    text: "دریافت مشاوره",
    link: "/#",
    icon: "",
  },
  {
    text: "سوالات متداول",
    link: "/#",
    icon: "",
  },
  {
    text: "تماس با ما",
    link: "/#",
    icon: "",
  },
];
</script>
