<template>
  <div class="layout">
    <div
      class="h-64 flex items-center"
      style="background-image: linear-gradient(120deg, #aa0063 0%, #0066aa 100%);"
    >
      <header class="header">
        <strong>
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <g-link class="nav__link" to="/about">About</g-link>
        </nav>
      </header>
      <div class="flex-1 text-center">
        <g-image
          src="~/assets/images/logo_outlined_white.svg"
          alt="CleverFields"
          class="mx-auto sm:mx-0"
        />
        <span
          class="bg-brand font-bold text-center text-white text-3xl md:text-5xl px-3 mb-5 sm:mb-16"
        >Tailwind Starter Components</span>
      </div>
    </div>

    <slot />
    <!-- index.html -->

    <footer class="bg-gray-100">
      <div class="container mx-auto px-6 pt-10 pb-6">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Links</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">FAQ</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Help</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Support</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Legal</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Terms</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Privacy</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Social</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Facebook</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Linkedin</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Twitter</a>
              </li>
            </ul>
          </div>
          <div class="w-full md:w-1/4 text-center md:text-left">
            <h5 class="uppercase mb-6 font-bold">Company</h5>
            <ul class="mb-4">
              <li class="mt-2">
                <a
                  href="#"
                  class="hover:underline text-gray-600 hover:text-orange-500"
                >Official Blog</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">About Us</a>
              </li>
              <li class="mt-2">
                <a href="#" class="hover:underline text-gray-600 hover:text-orange-500">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>