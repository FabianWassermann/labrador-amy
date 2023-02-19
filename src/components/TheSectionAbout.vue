
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
            Willkommen auf unserer Webseite
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
            Einblicke und Infos über uns
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
                  src="@/assets/Ami/P2130708.jpeg"
                  alt="Amy"
                  width="1184"
                  height="1376"
                />
              </div>
              <figcaption class="mt-3 flex text-sm text-gray-500">
                <CameraIcon
                  class="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2">Fotografiert von Oliver J.</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="mx-auto max-w-prose text-base lg:max-w-none">
            <p class="text-lg text-gray-500">
              Unsere Amy (laut Ahnentafel Bernadett vom Almental) hat vom ersten
              Tag an unser Herz erobert. Amy wurde am 21. März 2021 geboren und
              wir durften sie am 30. Mai 2021 in unserem Haus aufnehmen. Unser
              Zwingername Sunnysoul hat sich Amy selbst gegeben.
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
              Wir leben im sonnigen Süden Kärntens (in Oberkärnten), auf eine
              Anhöhe. Mit Amys Einzug haben wir auch bei Schlechtwetter einen
              Sonnenschein im Haus, da sie ein fröhliches uns sonniges Wesen
              hat. So wie die Sonne auf Menschen positiv wirkt, so sorgt Amy in
              unserer Familie für positive Stimmung und gute Laune.
            </p>
            <p>
              Amy ist ein Labrador aus der Arbeitslinie. Ihre innere Ruhe und
              Ausgeglichenheit beruht auf intensive Beschäftigung sowohl
              körperlich als auch psychisch. Sie ist bei fast jeder
              Familienaktivität integriert:
            </p>
            <ul role="list">
              <li>
                <strong>Hochalpine Wanderungen und Schwimmen</strong>, sorgen
                für ihre körperliche Auslastung.
              </li>
              <li>
                Der <strong>Besuch der Hundeschule</strong> von
                <a href="https://sunshine-labs.weebly.com/">Daniela Erasmus</a>
                (Leiterin der Ausbildungsstätte ÖRC-Villach) und der damit
                verbundene <strong>Dummysport</strong>, sorgen für die
                psychische Auslastung.
              </li>
              <li>
                Hohe Sozialkompetenz im Umgang mit Kindern jeglichen Alters,
                bringt sie auch zum Arbeitsplatz in der
                <strong>Musikschule</strong> mit.
              </li>
            </ul>
            <h3>Unsere Herangehensweise / Motto</h3>
            <!-- <blockquote>
              <p>
                Die Liebe und Treue eines Hundes kann man nicht beschreiben, die
                muss man erleben!
              </p>
            </blockquote> -->
            <blockquote>
              <p>
                Gut abgerichtet, kann der Hund der beste Freund eines Menschens
                sein.
              </p>
            </blockquote>
            <p>
              Nach diesem Motto ist der Hundehalter in der Pflicht viel Energie,
              Liebe und Zeit zu investieren, um den "besten" Begleiter fürs
              Leben zu haben.
            </p>
            <h3>Unser Zuchtziel</h3>
            <ul role="list">
              <li>Gesundheit</li>
              <li>Arbeitsfreude</li>
              <li>Aussehen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { CameraIcon } from "@heroicons/vue/20/solid";
</script>