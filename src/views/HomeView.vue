This example requires Tailwind CSS v3.0+
<template>
  <!-- after:fixed
      after:top-0
      after:bottom-0
      after:left-0
      after:right-0
      after:bg-black/10 -->
  <div
    class="isolate bg-white relative aspect-video bg-cover"
    style="
      /* background-image: url('https://images.unsplash.com/photo-1618153807812-a12a1950d93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'); */
      background-image: url('https://images.unsplash.com/photo-1524401033441-e87cab019093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
    "
  >
    <TheHeader class="w-full"></TheHeader>
    <main class="px-6 pt-6 lg:px-8 max-w-[90rem] mx-auto h-full">
      <div class="h-2/3 flex flex-col justify-center">
        <h1
          class="
            w-fit
            text-gray-200 text-8xl
            tracking-wide
            font-bold
            leading-[1.15]
            mix-blend-difference
          "
        >
          Dein <br />bester Freund.
        </h1>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import TheHeader from "@/components/TheHeader.vue";
</script>