<template>
  <!-- Image Slider -->
  <div
    v-for="(image, index) of images"
    :key="index"
    ref="imageRefs"
    :style="`background-image: url('${image.src}');`"
    class="h-full w-full absolute hidden bg-cover bg-center -z-10"
  ></div>
  <main
    class="px-6 pt-6 lg:px-8 max-w-7xl w-full mx-auto h-full grow flex flex-col justify-between"
  >
    <!-- Hero Content -->
    <div class="h-2/3 flex flex-col justify-center opacity-0">
      <div class="relative">
        <h1
          class="w-fit z-10 text-white text-6xl sm:text-8xl 2xl:text-9xl tracking-wide font-extrabold leading-[1.15] text-center sm:text-left text-ellipsis"
        >
          Dein <br />bester Freund.
        </h1>
        <h1
          class="absolute top-[0.2rem] left-[0.2rem] sm:top-[0.3rem] sm:left-[0.3rem] w-fit text-white text-6xl sm:text-8xl 2xl:text-9xl tracking-wide font-extrabold leading-[1.15] mix-blend-difference text-center sm:text-left text-ellipsis"
        >
          Dein <br />bester Freund.
        </h1>
      </div>
    </div>
    <!-- Hero Image Legend -->
    <div
      class="mx-auto sm:mr-0 bg-black/80 p-8 text-white max-w-[16rem] 2xl:max-w-[18rem] w-full"
    >
      <div class="inline-flex items-start">
        <Transition mode="out-in">
          <span
            :key="currImageIndex"
            class="text-3xl sm:text-4xl 2xl:text-5xl font-bold"
          >
            {{ String(currImageIndex + 1).padStart(2, "0") }}
          </span>
        </Transition>
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
      <Transition mode="out-in">
        <div :key="currImageIndex">
          <p class="font-semibold text-base 2xl:text-lg">
            {{ images[currImageIndex]?.title || "-" }}
          </p>
          <p class="leading-5 text-base 2xl:text-lg mt-2 font-light">
            {{ images[currImageIndex]?.desc || "-" }}
          </p>
        </div>
      </Transition>
    </div>
  </main>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 500ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0.5;
}
</style>

<script setup>
import { ref, onMounted, watch } from "vue";
import image1 from "@/assets/hero/amy_salzkofel_blick.webp";
import image2 from "@/assets/hero/amy_steg_liegend.webp";
import image3 from "@/assets/hero/amy_sprung.webp";
import image4 from "@/assets/hero/amy_herbst_wald.webp";

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
      easing: "ease-in",
    }
  );

  oldRef.animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(100%)" }],
    {
      duration: imageSlideDuration,
      easing: "ease-in",
    }
  );

  setTimeout(() => {
    oldRef.style.display = "none";
  }, imageSlideDuration);
}

const images = [
  {
    src: image1,
    title: "Posierend vorm Salzkofel",
    desc: "Amy ruht sich am täglichen Spazierweg aus.",
  },
  {
    src: image2,
    title: "Am Teich entspannen",
    desc: "Amy erlernte an diesem Platz das sichere Schwimmen.",
  },
  {
    src: image3,
    title: "Am Weg zum Dummy",
    desc: "Für den Dummysport lässt sich Amy voll begeistern.",
  },
  {
    src: image4,
    title: "Im vollen Fokus",
    desc: "Amy lauscht aufmerksam.",
  },
];
</script>
