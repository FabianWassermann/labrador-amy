<template>
  <div class="px-6 pt-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Header -->
    <nav class="flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <!-- <img class="h-8" src="@/assets/logo_test.png" alt="" /> -->
          <span
            class="font-bold text-3xl tracking-wide text-white uppercase"
            :class="{ '!text-black': background === 'light' }"
            >Labrador</span
          >
        </router-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="
            -m-2.5
            inline-flex
            items-center
            justify-center
            rounded-md
            p-2.5
            text-white
          "
          :class="{ '!text-black': background === 'light' }"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="text-md font-medium leading-6 text-white"
          :class="{ '!text-black': background === 'light' }"
          >{{ item.name }}</router-link
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <router-link
          to="/kontakt"
          class="text-md font-semibold leading-6 text-white"
          :class="{ '!text-black': background === 'light' }"
          >Kontakt <span aria-hidden="true">&rarr;</span></router-link
        >
      </div>
    </nav>
    <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <DialogPanel
        focus="true"
        class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
      >
        <div class="flex items-center justify-between">
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <!-- <img
              class="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            /> -->
            <span
              class="font-bold text-3xl tracking-wide text-gray-900 uppercase"
              :class="{ '!text-black': background === 'light' }"
              >Labrador</span
            >
          </router-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="
                  -mx-3
                  block
                  rounded-lg
                  py-2
                  px-3
                  text-base
                  font-semibold
                  leading-7
                  text-gray-900
                  hover:bg-gray-400/10
                "
                >{{ item.name }}</router-link
              >
            </div>
            <div class="py-6">
              <router-link
                to="/kontakt"
                class="
                  -mx-3
                  block
                  rounded-lg
                  py-2.5
                  px-3
                  text-base
                  font-semibold
                  leading-6
                  text-gray-900
                  hover:bg-gray-400/10
                "
                >Kontakt</router-link
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import router from "../router";

const props = defineProps({
  background: String,
});

const navigation = [
  { name: "Über uns", to: "/ueber-uns" },
  { name: "Neuigkeiten", to: "/neuigkeiten" },
  { name: "Stammbaum", to: "/stammbaum" },
  { name: "Galerie", to: "/galerie" },
];

const mobileMenuOpen = ref(false);
</script>