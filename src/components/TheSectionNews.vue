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
          v-for="post in posts"
          :key="post.title"
          class="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <router-link :to="post.to" class="mt-2 block">
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
                  <span>{{ post.readingTime }} read</span>
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
const posts = [
  {
    title: "Zuchtzulassung und Formwert bestanden",
    to: "/test",
    description: "test",
    date: "Nov 10, 2022",
    datetime: "2022-11-10",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
  },
  //   {
  //     title: "Schulter-, Ellbogen- und HD-Untersuchung bestanden",
  //     href: "#",
  //     description:
  //       "Amy hat heute die Schulter-, Ellbogen- und HD-Untersuchung erfolgreich bestanden und wir sind froh, dass alles in bester Ordnung ist.",
  //     date: "Mar 10, 2020",
  //     datetime: "2020-03-10",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  //     readingTime: "4 min",
  //   },
  //   {
  //     title: "Amy ist eingezogen",
  //     href: "#",
  //     description:
  //       "Amy ist bei uns eingezogen und lebt sich gut ein. Wir lieben es mit ihr zu spielen und mit ihr zu kuscheln. Sie ist ein ruhiger und zugleich aufgeweckter Hund.",
  //     date: "Feb 12, 2020",
  //     datetime: "2020-02-12",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  //     readingTime: "3 min",
  //   },
];
</script>