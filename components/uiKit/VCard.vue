<template>
  <div class="card bg-white rounded-3xl w-full">
    <div class="p-6">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.card {
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.05);
}
</style>
