
<template>
  <div class="overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
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
        "
      />
      <div
        class="
          mx-auto
          max-w-prose
          text-base
          lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8
        "
      >
        <div>
          <h2 class="text-lg font-semibold text-sky-600">
            Herzlich Willkommen!
          </h2>
          <h3
            class="
              mt-2
              text-3xl
              font-bold
              leading-8
              tracking-tight
              text-gray-900
              sm:text-4xl
            "
          >
            Hundezucht der Labrador Retriever aus Arbeitslinien
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:col-start-2 lg:row-start-1">
          <svg
            class="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img
                  class="rounded-lg object-cover object-center shadow-lg"
                  src="https://images.unsplash.com/photo-1537204696486-967f1b7198c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="Whitney leaning against a railing on a downtown street"
                  width="1184"
                  height="1376"
                />
              </div>
              <figcaption class="mt-3 flex text-sm text-gray-500">
                <CameraIcon
                  class="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2">Fotografiert von Jakobi O.</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto max-w-prose text-base lg:max-w-none">
            <p class="text-lg text-gray-500">
              Willkommen auf der Webseite der Labrador Retriever Zucht [name]!
              Wir sind eine kleine, aber passionierte Zucht, die sich dem Wohl
              und der Gesundheit unserer Vierbeiner verschrieben hat. Unsere
              Labradore sind nicht nur wunderschöne und liebevolle Begleiter,
              sondern auch ausgebildete Tiere, die ihren Besitzern viel Freude
              bereiten.
            </p>
          </div>
          <div
            class="
              prose prose-indigo
              mx-auto
              mt-5
              text-gray-500
              lg:col-start-1 lg:row-start-1 lg:max-w-none
            "
          >
            <p>
              Wir sind eine vierköpfige Familie, mit einer Leidenschaft für
              Hunde und es gibt nichts Schöneres, als zu sehen, wie seine Hunde
              glücklich und gesund aufwachsen und ihre neuen Familien
              bereichern. Wir legen großen Wert auf artgerechte Haltung und eine
              gute Sozialisierung der Hunde, um sicherzustellen, dass sie zu
              selbstbewussten und gut angepassten Hunden heranwachsen.
            </p>
            <p>
              Wir laden Sie ein, sich auf unserer Webseite umzusehen und sich
              von der Schönheit und dem Charme unserer Labradore zu überzeugen.
              Wir freuen uns darauf, von Ihnen zu hören und Ihnen bei der Suche
              nach Ihrem neuen Familienmitglied zu helfen!
            </p>
            <h3>Nützliche Informationen</h3>
            <p>
              Tincidunt integer commodo, cursus etiam aliquam neque, et.
              Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
              feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
              proin massa, lectus. Diam rutrum posuere donec ultricies non
              morbi. Mi a platea auctor mi.
            </p>
            <ul role="list">
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>
                Cras cras lobortis vitae vivamus ultricies facilisis tempus.
              </li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { CameraIcon } from "@heroicons/vue/20/solid";
</script>