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
      class="h-full w-full absolute hidden"
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
            text-gray-400 text-8xl
            2xl:text-9xl
            tracking-wide
            font-bold
            leading-[1.15]
          "
        >
          Dein <br />bester Freund.
        </h1>
      </div>
      <!-- Hero Image Legend -->
      <div
        class="ml-auto bg-gray-900/75 p-8 text-gray-100 max-w-[18rem] w-full"
      >
        <div class="inline-flex items-start">
          <div class="relative flex overflow-hidden items-center h-12 numbers">
            01
          </div>
          <span class="text-lg font-medium mt-1" ref="slideNumber"
            >/ {{ String(images.length).padStart(2, "0") }}</span
          >
        </div>
        <div class="relative w-full h-1 bg-gray-400 my-2">
          <div
            class="absolute top-0 left-0 bg-gray-100 h-full"
            ref="slideProgress"
          ></div>
        </div>
        <p class="font-semibold text-lg">Amy</p>
        <p class="leading-5 text-lg mt-2 font-light">
          Sie liebt es in Wiesen zu sitzen.
        </p>
      </div>
    </main>
  </div>
</template>

<style>
.numbers {
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
}
.numbers span {
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 2s ease;
  transform: translateY(0);
  line-height: 1;
}
.numbers span span {
  flex: 0 0 100%;
  height: 100%;
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
}
</style>

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
  slideNumber.value.style.marginLeft = "4px";
  oldSlideNumbers.value = createNumberArray(currImageIndex.value + 1);

  setInterval(() => {
    currImageIndex.value =
      currImageIndex.value === images.length - 1 ? 0 : currImageIndex.value + 1;
  }, 10000);
});

let currImageIndex = ref(0);
const imageRefs = ref([]);
const slideProgress = ref(null);
const slideNumber = ref(null);
let oldSlideNumbers = ref([]);

watch(currImageIndex, (newIndex, oldIndex) => {
  const currRef = imageRefs.value[newIndex];
  const oldRef = imageRefs.value[oldIndex];
  doImageSliderChanges(currRef, oldRef);
  animateNumber(currImageIndex.value + 1, document.querySelector(".numbers"));
  doSlideNumberChanges();
});

function doSlideNumberChanges() {
  if (currImageIndex.value + 1 >= 3) return;
  const marginLeft = currImageIndex.value + 1 === 1 ? "-4px" : "4px";
  slideNumber.value.animate([{ marginLeft: marginLeft }], {
    duration: 1000,
    fill: "forwards",
    easing: "ease-out",
  });
}

function createNumberArray(number) {
  // Zerlegt die Nummer in einen Array
  const numberArray = number.toString().split("");
  for (let i = 0; numberArray.length < 2; i++) {
    numberArray.unshift(0);
  }
  // gibt den Array zurück
  return numberArray.map((x) => parseInt(x));
}

function animateNumber(number, element) {
  // Leert das Element
  element.innerHTML = "";
  // Berechnet den neuen Number Array
  const numberArray = createNumberArray(number);
  // Legt alles in das HTML Element
  createNumberHTML(numberArray, oldSlideNumbers.value, element);
  // Berechnet die Ticks die verändert werden sollen.
  const ticks = [...element.querySelectorAll("span[data-value]")];
  setTimeout(() => {
    // Animiert die Werte
    for (let tick of ticks) {
      let dist = parseInt(tick.getAttribute("data-value") - 1);
      tick.style.transform = `translateY(-${dist * 100}%)`;
    }
  }, 0);
  // Setzten den Zahlen Array zu dem Alten Status
  oldSlideNumbers.value = numberArray;
}

function createNumberHTML(numbers, old, element) {
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i]) || isNaN(old[i])) {
      element.insertAdjacentHTML(
        "beforeend",
        `<span data-value="${
          calcDeltaSight(old[i], numbers[i]).length
        }">${calcDeltaSight(old[i], numbers[i]).join("")}</span>`
      );
    } else {
      element.insertAdjacentHTML(
        "beforeend",
        `<span data-value="${
          calcDeltaBetweenNumbers(old[i], numbers[i]).length
        }">${calcDeltaBetweenNumbers(old[i], numbers[i]).join("")}</span>`
      );
    }
  }
  return element;
}

function calcDeltaSight(oldSight, newSight) {
  return oldSight !== newSight
    ? [`<span>${oldSight}</span>`, `<span>${newSight}</span>`]
    : [`<span>${newSight}</span>`];
}

function calcDeltaBetweenNumbers(oldNumber, newNumber) {
  let numberArray = [oldNumber];
  let notFound = true;
  if (oldNumber === newNumber)
    return numberArray.map((x) => `<span>${x}</span>`);
  while (notFound) {
    oldNumber++;
    if (oldNumber > 9) oldNumber = 0;
    numberArray.push(oldNumber);
    if (oldNumber === newNumber) notFound = false;
  }
  return numberArray.map((x) => `<span>${x}</span>`);
}

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