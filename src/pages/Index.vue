<template>
  <Layout>
    <div class="gradient">
      <Hero />
      <Wave />
    </div>

    <div class="bg-gray-900 pt-12">
      <div class="container mx-auto">
        <div class="flex flex-wrap bg-gray-900 pb-4">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex flex-col p-3">
            <div class="card overflow-hidden flex-1 flex flex-col">
              <div
                class="bg-cover h-48"
                style="background-image: url(https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&w=1334);"
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
              <div class="p-4 flex-1 flex flex-col" style>
                <h3 class="card__title">Développement</h3>
                <div class="card__content mb-4 flex-1">
                  <p>Je vous propose d'étudier et de développer dans les règles de l'art votre projet Web d'application Web.</p>
                </div>
                <a
                  href="#"
                  class="border-t border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
                  style
                >J'ai justement un projet Web !</a>
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
      </div>
    </div>
  </Layout>
</template>

<script>
import Hero from "~/components/Hero.vue";
import Wave from "~/components/Wave.vue";

export default {
  metaInfo: {
    title: "Bienvenue"
  },
  components: {
    Hero,
    Wave
  }
};
</script>