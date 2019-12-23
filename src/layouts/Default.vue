<template>
  <div class="layout">
    <!--Nav-->
    <nav id="header" class="fixed w-full z-30 top-0 text-white">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
          <a
            class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <g-image src="~/assets/images/logo_outlined_white.svg" alt="CleverFields" />
          </a>
        </div>

        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a class="inline-block py-2 px-4 text-white font-bold no-underline" href="#">Active</a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="#"
              >link</a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-white no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                href="/about"
              >A propos de moi</a>
            </li>
          </ul>
          <button class="btn mx-auto lg:mx-0">Contactez moi !</button>
        </div>
      </div>

      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>

    <footer />

    <slot />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Footer
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>