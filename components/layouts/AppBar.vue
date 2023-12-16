<template>
  <header class="w-full bg-[#fff] py-4 md:py-6 rounded-b-lg shadow">
    <nav
      class="lg:container lg:mx-auto flex items-center md:mt-3 relative px-4 lg:px-0"
    >
      <div class="md:flex hidden justify-around lg:w-[600px] w-full lg:mx-auto">
        <template v-for="item in items" :key="item.text">
          <SvgRender
            :icon="item.icon"
            class="-mt-4 -ml-4"
            :color="path.includes(item.link) ? '#E20054' : undefined"
            width="20"
          />
          <NuxtLink
            :to="item.link"
            :class="[path.includes(item.link) ? 'text-primary' : '']"
          >
            {{ item.text }}
            <div
              v-if="path.includes(item.link)"
              class="bg-primary w-[8px] h-[8px] rounded-full mt-2 mx-auto"
            ></div>
          </NuxtLink>
        </template>
      </div>
      <VButton
        class="md:hidden border-primary border-2"
        outline
        rounded="rounded-2xl"
      >
        <div class="flex items-center">
          <SvgRender icon="menu" color="#E20054" width="20" />
        </div>
      </VButton>
      <VButton
        class="md:-mt-3 lg:absolute lg:left-0 mr-auto md:mr-0"
        :class="[smAndDown ? 'border-primary border-2' : '']"
        :outline="smAndDown"
        rounded="rounded-2xl"
      >
        <div class="flex item-center">
          <span class="hidden md:block"> تماس </span>
          <SvgRender
            icon="phone"
            :color="smAndDown ? '#E20054' : '#fff'"
            width="20"
            class="md:mr-3"
          />
        </div>
      </VButton>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const { smAndDown } = useDisplay();
const path = computed(() => route.path);

const items = [
  {
    text: "لیست محصولات",
    link: "/products",
    icon: "products",
  },
  {
    text: "دریافت مشاوره",
    link: "#",
    icon: "book",
  },
  {
    text: "سوالات متداول",
    link: "#",
    icon: "question",
  },
  {
    text: "تماس با ما",
    link: "#",
    icon: "phone",
  },
];
</script>
