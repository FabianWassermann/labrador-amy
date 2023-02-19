<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
    </div>
    <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
      <div
        class="bg-gray-50 py-16 px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
      >
        <div class="mx-auto max-w-lg">
          <h2
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            Kontaktieren Sie uns
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            Wir würden uns freuen, wenn Sie sich mit uns in Kontakt setzen.
          </p>
          <dl class="mt-8 text-base text-gray-500">
            <div>
              <dt class="sr-only">Adresse</dt>
              <dd>
                <p>Pattendorf 72</p>
                <p>9813 Möllbrücke</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Telefonnummer</dt>
              <dd class="flex">
                <PhoneIcon
                  class="h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-3">+43 67761819206</span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <EnvelopeIcon
                  class="h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-3">wassermann.matthias@gmail.com</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="bg-white py-16 px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
        <div class="mx-auto max-w-lg lg:max-w-none">
          <h2
            class="
              text-2xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-3xl
              opacity-0
            "
          >
            Kontaktieren Sie uns
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            Gerne können Sie uns auch über dieses Kontaktformular eine Nachricht
            senden.
          </p>
          <form
            v-on:submit="contactFormSubmit"
            class="grid grid-cols-1 gap-y-6 mt-8"
          >
            <div>
              <label for="full-name" class="sr-only">Name</label>
              <input
                type="text"
                name="full-name"
                id="full-name"
                autocomplete="name"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  py-3
                  px-4
                  placeholder-gray-500
                  shadow-sm
                  focus:border-sky-500 focus:ring-sky-500
                "
                placeholder="Name"
              />
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  py-3
                  px-4
                  placeholder-gray-500
                  shadow-sm
                  focus:border-sky-500 focus:ring-sky-500
                "
                placeholder="Email"
              />
            </div>
            <div>
              <label for="phone" class="sr-only">Telefonnummer</label>
              <input
                type="text"
                name="phone"
                id="phone"
                autocomplete="tel"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  py-3
                  px-4
                  placeholder-gray-500
                  shadow-sm
                  focus:border-sky-500 focus:ring-sky-500
                "
                placeholder="Telefonnummer"
              />
            </div>
            <div>
              <label for="message" class="sr-only">Nachricht</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="
                  block
                  w-full
                  rounded-md
                  border-gray-300
                  py-3
                  px-4
                  placeholder-gray-500
                  shadow-sm
                  focus:border-sky-500 focus:ring-sky-500
                "
                placeholder="Nachricht"
              />
            </div>
            <div>
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  rounded-md
                  border border-transparent
                  bg-sky-600
                  py-3
                  px-6
                  text-base
                  font-medium
                  text-white
                  shadow-sm
                  hover:bg-sky-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-500
                  focus:ring-offset-2
                "
              >
                Senden
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/outline";

async function contactFormSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  await fetch("https://1vezik7285.execute-api.eu-central-1.amazonaws.com/all", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.get("email"),
      message: data.get("message"),
      tel: data.get("phone"),
      name: data.get("full-name"),
      sourceName: "LabradorSunnySoul",
    }),
  });
  e.target.reset();
}
</script>