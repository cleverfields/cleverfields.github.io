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

    <!-- index.html -->

    <footer class="bg-gray-500">
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
  metadata {
    siteName
  }
}
</static-query>