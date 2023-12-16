<template>
  <div class="grid grid-cols-12 gap-4">
    <aside class="col-span-12 md:col-span-4 lg:col-span-3 w-full">
      <!-- Search card -->
      <VCard>
        <h3 class="text-[#445A74]">فیلتر و جستجو</h3>
        <VInput v-model="searchInput" class="my-5" @keyup.enter="search" />
        <VButton class="w-full h-[45px]" rounded="rounded-2xl" @click="search">
          <span class="font-light text-lg">جستجو</span>
        </VButton>
      </VCard>
      <!-- Available products -->
      <VCard class="my-4">
        <div class="flex items-center justify-between">
          <span class="text-[#445A74]"> محصولات موجود </span>
          <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="exist" type="checkbox" class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            ></div>
          </label>
        </div>
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
    <div class="lg:col-span-9 md:col-span-8 col-span-12 w-full">
      <AppliedFilters class="mb-4" />
      <ProductsList class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { updateSortFilter, getSort, updateSearchFilter } = useFilters();
const searchInput = ref<string>("");
const sort = shallowRef<string | null>(getSort.value);
const isSortVisible = shallowRef<boolean>(true);

const sortValues = [
  {
    text: "تعداد: کم به زیاد",
    value: "count-asc",
  },
  {
    text: "تعداد: زیاد به کم",
    value: "count-desc",
  },
  {
    text: "رتبه: زیاد به کم",
    value: "rate-desc",
  },
  {
    text: "رتبه: کم به زیاد",
    value: "rate-asc",
  },
];
const exist = shallowRef<boolean>(false);

const search = () => {
  updateSearchFilter(searchInput.value);

  searchInput.value = "";
};

watch(sort, () => {
  updateSortFilter(sort.value || undefined);
});

watch(getSort, (newVal) => {
  sort.value = newVal;
});
</script>
