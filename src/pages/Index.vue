<template>
  <LandingLayout>
    <h2>Ce que je peux vous apporter...</h2>
    <div class="flex flex-wrap bg-gray-900">
      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col p-3">
        <div class="card overflow-hidden flex-1 flex flex-col">
          <div
            class="bg-cover h-48"
            style="background-image: url(https://images.unsplash.com/photo-1523978591478-c753949ff840?w=900);"
          ></div>
          <div class="p-4 flex-1 flex flex-col" style>
            <h3 class="card__title">Audit & Consulting</h3>
            <div class="card__content mb-4 flex-1">
              <p>Je vous accompagne dans vos projets naissants ou bien dans l'analyse de votre code legacy ! Je met ainsi mon expertise à votre disposition.</p>
            </div>
            <a
              href="/consulting"
              class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
              style
            >Cela m'intéresse</a>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col p-3">
        <div class="card overflow-hidden flex-1 flex flex-col">
          <div
            class="bg-cover h-48"
            style="background-image: url(https://images.unsplash.com/photo-1497398276231-94ff5dc90217?w=900);"
          ></div>
          <div class="p-4 flex-1 flex flex-col" style="
">
            <h3 class="card__title">Développement</h3>
            <div class="card__content mb-4 flex-1">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, tempore sapiente eveniet quibusdam ab ea, quaerat placeat numquam aspernatur, accusamus magnam neque.</p>
            </div>
            <a
              href="#"
              class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
              style="
"
            >Twitter</a>
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col p-3">
        <div class="card overflow-hidden flex-1 flex flex-col">
          <div
            class="bg-cover h-48"
            style="background-image: url(https://images.unsplash.com/photo-1503863937795-62954a3c0f05?w=900);"
          ></div>
          <div class="p-4 flex-1 flex flex-col" style>
            <h3 class="card__title mb-4">Expertise Google</h3>
            <div class="card__content mb-4 flex-1">
              <p>Shorter text.</p>
            </div>
            <a
              href="#"
              class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
              style
            >Twitter</a>
          </div>
        </div>
      </div>
    </div>
  </LandingLayout>
</template>

<script>
import LandingLayout from "~/layouts/Landing.vue";

export default {
  metaInfo: {
    title: "Bienvenue"
  },
  components: {
    LandingLayout
  }
};
</script>
