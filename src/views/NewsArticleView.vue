<template>
  <!-- HEADER -->
  <div class="bg-sky-900">
    <TheHeader class="w-full pb-6" background="dark"></TheHeader>
  </div>
  <!-- NEWS -->
  <div class="relative">
    <div
      class="
        absolute
        top-0
        bottom-0
        left-3/4
        hidden
        w-screen
        bg-gray-50
        lg:block
        z-0
      "
    ></div>
    <div
      class="
        px-6
        pt-6
        lg:pr-8 lg:pl-24
        max-w-7xl
        mx-auto
        w-full
        pb-6
        relative
        overflow-hidden
      "
    >
      <div>
        <div class="flex flex-col gap-5">
          <button
            type="button"
            @click="router.back()"
            class="
              group
              lg:absolute lg:right-full lg:mr-8
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-md shadow-gray-800/5
              ring-1 ring-gray-900/5
            "
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              class="
                h-4
                w-4
                stroke-gray-700
                transition
                group-hover:stroke-gray-900
              "
            >
              <path
                d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <time
            :datetime="news.datetime"
            class="flex items-center text-base text-gray-900 lg:h-10"
          >
            <span class="h-4 w-0.5 rounded-full bg-gray-900" />
            <span class="ml-3 font-medium">{{ news.date }}</span>
          </time>
        </div>
        <newsMarkdown class="prose prose-lg mt-8"></newsMarkdown>
      </div>
    </div>
  </div>
  <!-- FOOTER -->
  <TheFooter></TheFooter>
</template>

<script setup>
import { ref, onBeforeMount, shallowRef, defineAsyncComponent } from "vue";
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import newsArr from "@/news.js";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const news = ref({});
const newsMarkdown = shallowRef("");

onBeforeMount(() => {
  news.value = newsArr.find((newsEl) => newsEl.id === route.params.newsId);
  newsMarkdown.value = defineAsyncComponent(() =>
    import(`@/news/${news.value.id}/index.md`)
  );
});
</script>
