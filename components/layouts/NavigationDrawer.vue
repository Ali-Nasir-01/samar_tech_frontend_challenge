<template>
  <TransitionRoot dir="rtl" as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="pointer-events-auto relative w-screen max-w-md"
              >
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <div class="px-4 sm:px-6">
                    <DialogTitle
                      class="text-base font-semibold leading-6 text-gray-900 flex align-center"
                    >
                      <span> منو </span>
                      <span
                        class="mr-auto cursor-pointer text-primary"
                        @click="open = false"
                      >
                        <div class="flex align-center">
                          <SvgRender
                            icon="close"
                            color="#E20054"
                            width="20"
                            class="ml-1"
                          />
                          بستن
                        </div>
                      </span>
                    </DialogTitle>
                  </div>
                  <div class="relative mt-6 px-4 sm:px-6">
                    <template v-for="item in items" :key="item.text">
                      <div class="my-5 flex item-center">
                        <SvgRender
                          :icon="item.icon"
                          class="ml-2"
                          :color="
                            path.includes(item.link) ? '#E20054' : undefined
                          "
                          width="20"
                        />
                        <NuxtLink
                          :to="item.link"
                          :class="[
                            path.includes(item.link) ? 'text-primary' : '',
                          ]"
                        >
                          {{ item.text }}
                        </NuxtLink>
                      </div>
                    </template>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

interface IProps {
  dialog: boolean;
  items: Record<string, string>[];
}
const props = withDefaults(defineProps<IProps>(), {
  dialog: false,
});
const emit = defineEmits(["close"]);
const open = shallowRef<boolean>(false);
const route = useRoute();
const path = computed(() => route.path);

watch(
  () => props.dialog,
  (newVal) => {
    if (newVal) {
      open.value = true;
    }
  },
  {
    immediate: true,
  }
);

watch(open, (newVal) => {
  if (!newVal) {
    emit("close");
  }
});
</script>
