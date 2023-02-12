<template>
  <!-- Image Slider -->
  <div
    v-for="(image, index) of images"
    :key="index"
    ref="imageRefs"
    :style="`background-image: url('${image.src}');`"
    class="h-full w-full absolute hidden bg-cover -z-10"
  ></div>
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
      <div class="relative">
        <h1
          class="
            w-fit
            z-10
            text-white text-6xl
            sm:text-8xl
            2xl:text-9xl
            tracking-wide
            font-extrabold
            leading-[1.15]
            text-center
            sm:text-left
            text-ellipsis
          "
        >
          Dein <br />bester Freund.
        </h1>
        <h1
          class="
            absolute
            top-[0.2rem]
            left-[0.2rem]
            sm:top-[0.3rem] sm:left-[0.3rem]
            w-fit
            text-white text-6xl
            sm:text-8xl
            2xl:text-9xl
            tracking-wide
            font-extrabold
            leading-[1.15]
            mix-blend-difference
            text-center
            sm:text-left
            text-ellipsis
          "
        >
          Dein <br />bester Freund.
        </h1>
      </div>
    </div>
    <!-- Hero Image Legend -->
    <div
      class="
        mx-auto
        sm:mr-0
        bg-black/80
        p-8
        text-white
        max-w-[16rem]
        2xl:max-w-[18rem]
        w-full
      "
    >
      <div class="inline-flex items-start">
        <transition>
          <span
            :key="currImageIndex"
            class="text-3xl sm:text-4xl 2xl:text-5xl font-bold"
          >
            {{ String(currImageIndex + 1).padStart(2, "0") }}
          </span>
        </transition>
        <span class="text-base 2xl:text-lg font-medium mt-1 ml-1"
          >/ {{ String(images.length).padStart(2, "0") }}</span
        >
      </div>
      <div class="relative w-full h-0.5 sm:h-1 bg-gray-400 my-2">
        <div
          class="absolute top-0 left-0 bg-white h-full"
          ref="slideProgress"
        ></div>
      </div>
      <p class="font-semibold text-base 2xl:text-lg">Amy</p>
      <p class="leading-5 text-base 2xl:text-lg mt-2 font-light">
        Sie liebt es in Wiesen zu sitzen.
      </p>
    </div>
  </main>
</template>


<script setup>
import { ref, onMounted, watch } from "vue";

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