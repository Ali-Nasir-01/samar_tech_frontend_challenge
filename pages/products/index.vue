<template>
  <div class="grid grid-cols-12 gap-4">
    <aside class="col-span-3 w-full">
      <!-- Search card -->
      <VCard>
        <h3 class="text-[#445A74]">فیلتر و جستجو</h3>
        <VInput v-model="searchInput" class="my-5" @keyup.enter="search" />
        <VButton class="w-full h-[45px]" rounded="rounded-2xl" @click="search">
          <span class="font-light text-lg">جستجو</span>
        </VButton>
      </VCard>
      <!-- Sort card -->
      <VCard class="my-4">
        <div
          class="flex items-center justify-between"
          :class="[isSortVisible ? 'mb-3' : '']"
        >
          <h3 class="text-[#445A74]">مرتب‌سازی</h3>
          <SvgRender
            icon="arrow-down"
            width="20"
            class="hover:cursor-pointer duration-100"
            :class="[isSortVisible ? '' : 'rotate-180']"
            @click="isSortVisible = !isSortVisible"
          />
        </div>
        <div v-if="isSortVisible" class="select-none">
          <div v-for="(item, index) in sortValues" :key="index">
            <label class="inline-flex items-center mt-3">
              <input
                v-model="sort"
                type="radio"
                name="sort"
                class="h-5 w-5 text-gray-600 accent-gray-500 checked:accent-primary"
                :value="item.value"
              /><span class="mr-2 text-gray-700">{{ item.text }}</span>
            </label>
          </div>
        </div>
      </VCard>
      <!-- Category card -->
      <CategoriesCard />
    </aside>
    <!-- Products list -->
    <ProductsList class="col-span-9 w-full" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const searchInput = ref<string | null>(null);
const sort = shallowRef<string>("asc");
const isSortVisible = shallowRef<boolean>(true);

const sortValues = [
  {
    text: "صعودی",
    value: "asc",
  },
  {
    text: "نزولی",
    value: "desc",
  },
];

const search = () => {
  if (searchInput.value) {
    let value: string | string[] = [searchInput.value];
    if (route.query?.search) {
      value.push(...(<string>route.query.search).split(","));
    }
    value = uniqItems(value);
    value = value.join(",");
    router.replace({
      query: {
        search: value,
      },
    });
    searchInput.value = null;
  }
};
</script>
