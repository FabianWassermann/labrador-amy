<template>
  <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
    <div class="absolute inset-0">
      <div class="h-1/3 bg-white sm:h-2/3" />
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        ></h2>
        <p class="mx-auto max-w-2xl text-xl text-gray-500">
          Alle Neuigkeiten über Amy und unsere Zucht auf einem Blick.
        </p>
      </div>
      <div
        class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
      >
        <div
          v-for="post in news"
          :key="post.title"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <router-link :to="`/neuigkeiten/${post.id}`" class="mt-2 block">
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </router-link>
            </div>
            <div class="mt-6 flex items-center">
              <div class="ml-0">
                <div class="flex space-x-1 text-sm font-medium text-gray-900">
                  <time :datetime="post.datetime">{{ post.date }}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{{ post.readingTime }} Lesezeit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import news from "@/news.js";
</script>