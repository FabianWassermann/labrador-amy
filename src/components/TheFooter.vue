<template>
  <footer class="bg-white">
    <div
      class="
        mx-auto
        max-w-7xl
        py-12
        px-6
        md:flex md:items-center md:justify-between
        lg:px-8
      "
    >
      <div class="flex justify-center md:order-2">
        <div
          v-for="item in navigation"
          :key="item.name"
          class="flex group items-center"
        >
          <router-link
            :to="item.to"
            class="text-gray-500 hover:text-gray-600 text-xs leading-5"
          >
            {{ item.name }}
          </router-link>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            class="h-0.5 w-0.5 fill-gray-400 group-last:hidden mx-3"
          >
            <circle cx="1" cy="1" r="1"></circle>
          </svg>
        </div>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-gray-500">
          &copy; 2023, Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  </footer>
</template>
  
<script setup>
const navigation = [
  {
    name: "Impressum",
    to: "#",
  },
  {
    name: "Datenschutz",
    to: "#",
  },
];
</script>