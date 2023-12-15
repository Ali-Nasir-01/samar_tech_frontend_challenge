<template>
  <div>
    <app-bar />
    <section class="container mx-auto my-6">
      <slot />
    </section>
    <FooterSection />
  </div>
</template>

<script setup>
import AppBar from "~/components/layouts/AppBar";
</script>
