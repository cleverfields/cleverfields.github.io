<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
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

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
