<template>
  <div class="grid grid-cols-12 gap-4">
    <aside class="col-span-3 w-full">
      <VCard>
        <h3 class="text-[#445A74]">فیلتر و جستجو</h3>
        <VInput v-model="searchInput" class="my-5" />
        <!-- action -->
        <VButton class="w-full h-[45px]" rounded="rounded-2xl" @click="search">
          <span class="font-light text-lg">جستجو</span>
        </VButton>
      </VCard>
    </aside>
    <ProductsList class="col-span-9 w-full" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const searchInput = ref<string | null>(null);

const search = () => {
  if (searchInput.value) {
    let value: string | string[] = [searchInput.value];
    if (route.query?.search) {
      value.push(...(<string>route.query.search).split(","));
    }
    value = value.join(",");
    router.replace({
      query: {
        search: value,
      },
    });
  }
};
</script>
