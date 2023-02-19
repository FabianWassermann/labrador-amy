<template>
  <!-- HEADER -->
  <div class="bg-sky-900">
    <TheHeader class="w-full pb-6" background="dark"></TheHeader>
  </div>
  <div class="py-16 px-6 lg:px-8 bg-gray-50">
    <div class="mx-auto max-w-2xl text-center">
      <h2
        class="
          text-4xl
          font-bold
          tracking-tight
          text-gray-900
          sm:text-6xl
          uppercase
        "
      >
        Neuigkeiten
      </h2>
      <svg
        class="w-2/3 -mt-2 mx-auto fill-gray-200"
        fill="none"
        height="36"
        viewBox="0 0 1195 36"
        width="1195"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m9.25524.223145c-9.005042 1.531465-9.985183 2.327835-8.20868 6.248395 1.65399 3.55296 3.06294 4.41066 7.35106 4.41066 2.08278 0 10.65898.6738 18.99018 1.5314 67.1397 6.616 123.6812 9.7402 228.4342 12.6194 62.851 1.7152 181.51 1.899 330.797.5513 49.069-.4288 208.893-.2451 212.568.245 1.042.1838 14.396.4288 29.711.6126 15.315.245 32.038.5513 37.061.6739 5.085.1837 19.113.6125 31.242.9801 12.13.3063 44.964 1.4089 72.898 2.3891 75.591 2.6954 110.881 3.6143 172.141 4.6557 25.66.3675 29.46.1225 42.14-2.8792 6.19-1.5315 8.03-1.7153 8.7-1.1639 1.23 1.0414 1.78-.4901 1.35-3.8593-.43-3.308-2.76-5.2683-8.64-7.4736-9.06-3.3692-8.76-3.3692-63.16-4.2881-61.01-1.0414-88.09-1.7153-149.468-3.6755-109.04-3.4918-132.87-3.98187-226.351-4.41068-74.858-.30629-131.277.06126-254.53 1.65399-60.646.79636-207.851.85762-247.486.06126-90.479-1.83777-134.647-3.55301-199.3971-7.71861-15.3759-.980139-33.8148-1.592729-36.14266-1.163915z"
          fill="current"
        />
      </svg>
    </div>
  </div>
  <!-- SECTION 1 -->
  <TheSectionNews></TheSectionNews>
  <!-- FOOTER -->
  <TheFooter></TheFooter>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheHero from "@/components/TheHero.vue";
import TheSectionNews from "@/components/TheSectionNews.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>