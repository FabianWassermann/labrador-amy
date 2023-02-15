This example requires Tailwind CSS v3.0+
<template>
  <!-- HEADER & HERO -->
  <!-- after:fixed
      after:top-0
      after:bottom-0
      after:left-0
      after:right-0
      after:bg-black/10
      after:pointer-events-none -->
  <div
    class="isolate bg-white relative bg-cover flex flex-col overflow-hidden"
    style="min-height: max(100vh, 40rem)"
  >
    <!-- Header Backdrop -->
    <div
      class="
        w-full
        pointer-events-none
        absolute
        top-0
        h-24
        bg-gradient-to-t
        from-transparent
        to-black
        opacity-50
      "
    ></div>
    <TheHeader class="w-full"></TheHeader>
    <!-- Hero -->
    <TheHero></TheHero>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheHero from "@/components/TheHero.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>