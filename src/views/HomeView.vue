This example requires Tailwind CSS v3.0+
<template>
  <!-- HEADER & HERO -->
  <div
    class="
      isolate
      bg-white
      relative
      bg-cover
      max-h-[65rem]
      min-h-[40rem]
      h-screen
      flex flex-col
      after:fixed
      after:top-0
      after:bottom-0
      after:left-0
      after:right-0
      after:bg-black/10
      after:pointer-events-none
      overflow-hidden
    "
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
  <!-- SECTION 1 -->
  <TheSection></TheSection>
  <!-- FOOTER -->
  <TheFooter></TheFooter>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheHero from "@/components/TheHero.vue";
import TheSection from "@/components/TheSection.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>