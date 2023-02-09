<template>
  <div class="px-6 pt-6 lg:px-8 max-w-[90rem] mx-auto">
    <!-- Header -->
    <nav class="flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <!-- <img
            class="h-8"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          /> -->
          <span class="font-bold text-3xl tracking-wide text-gray-100 uppercase"
            >Labrador</span
          >
        </a>
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
            text-gray-100
          "
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-md font-medium leading-6 text-gray-100"
          >{{ item.name }}</a
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-md font-semibold leading-6 text-gray-100"
          >Kontakt <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
    <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <DialogPanel
        focus="true"
        class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
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
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
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
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
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
                >Kontakt</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Über uns", href: "#" },
  { name: "Neuigkeiten", href: "#" },
  { name: "Wurfplanung", href: "#" },
  { name: "Galerie", href: "#" },
];

const mobileMenuOpen = ref(false);
</script>