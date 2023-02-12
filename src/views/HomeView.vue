This example requires Tailwind CSS v3.0+
<template>
  <!-- after:fixed
      after:top-0
      after:bottom-0
      after:left-0
      after:right-0
      after:bg-black/10 -->
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
    "
  >
    <!-- Image Slider -->
    <div
      v-for="(image, index) of images"
      :key="index"
      ref="imageRefs"
      :style="`background-image: url('${image.src}');`"
      class="h-full w-full absolute hidden bg-cover"
    ></div>
    <!-- Backdrop -->
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
    <main
      class="
        px-6
        pt-6
        lg:px-8
        max-w-[90rem]
        w-full
        mx-auto
        h-full
        flex flex-col
        justify-between
      "
    >
      <!-- Hero Content -->
      <div class="h-2/3 flex flex-col justify-center">
        <h1
          class="
            w-fit
            text-white text-8xl
            2xl:text-9xl
            tracking-wide
            font-extrabold
            leading-[1.15]
          "
          style="text-shadow: 2px 2px 1px #545454"
        >
          Dein <br />bester Freund.
        </h1>
      </div>
      <!-- Hero Image Legend -->
      <div
        class="
          ml-auto
          bg-gray-900/75
          p-8
          text-gray-100
          max-w-[16rem]
          2xl:max-w-[18rem]
          w-full
        "
      >
        <div class="inline-flex items-start">
          <transition>
            <span :key="currImageIndex" class="text-4xl 2xl:text-5xl font-bold">
              {{ String(currImageIndex + 1).padStart(2, "0") }}
            </span>
          </transition>
          <span class="text-md 2xl:text-lg font-medium mt-1 ml-1"
            >/ {{ String(images.length).padStart(2, "0") }}</span
          >
        </div>
        <div class="relative w-full h-1 bg-gray-400 my-2">
          <div
            class="absolute top-0 left-0 bg-gray-100 h-full"
            ref="slideProgress"
          ></div>
        </div>
        <p class="font-semibold text-md 2xl:text-lg">Amy</p>
        <p class="leading-5 text-md 2xl:text-lg mt-2 font-light">
          Sie liebt es in Wiesen zu sitzen.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import TheHeader from "@/components/TheHeader.vue";

onMounted(() => {
  imageRefs.value[currImageIndex.value].style.display = "block";
  slideProgress.value.style.width = `${
    ((currImageIndex.value + 1) / images.length) * 100
  }%`;

  setInterval(() => {
    currImageIndex.value =
      currImageIndex.value === images.length - 1 ? 0 : currImageIndex.value + 1;
  }, 5000);
});

let currImageIndex = ref(0);
const imageRefs = ref([]);
const slideProgress = ref(null);

watch(currImageIndex, (newIndex, oldIndex) => {
  const currRef = imageRefs.value[newIndex];
  const oldRef = imageRefs.value[oldIndex];
  doImageSliderChanges(currRef, oldRef);
});

function doImageSliderChanges(currRef, oldRef) {
  currRef.style.display = "block";
  currRef.style.zIndex = "-10";

  oldRef.style.zIndex = "-11";

  const imageSlideDuration = 750;

  slideProgress.value.animate(
    [{ width: `${((currImageIndex.value + 1) / images.length) * 100}%` }],
    {
      duration: imageSlideDuration,
      fill: "forwards",
      easing: "ease-out",
    }
  );

  currRef.animate(
    [{ transform: "translateX(-100%)" }, { transform: "translateX(0)" }],
    {
      duration: imageSlideDuration,
      easing: "ease-out",
    }
  );

  setTimeout(() => {
    oldRef.style.display = "none";
  }, imageSlideDuration);
}

const images = [
  {
    src: "https://images.unsplash.com/photo-1524401033441-e87cab019093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1618153807812-a12a1950d93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1606477787351-226f28ece81f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  },
];
</script>