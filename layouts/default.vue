<template>
  <div>
    <app-bar />
    <section class="container mx-auto">
      <slot />
    </section>
  </div>
</template>

<script setup>
import AppBar from "~/components/layouts/AppBar";
</script>
