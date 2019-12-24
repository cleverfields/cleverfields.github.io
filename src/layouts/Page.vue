<template>
  <div class="layout">
    <!--Nav-->
    <navigation :colorStyle="colorStyle"></navigation>
    <slot />
    <footer />
  </div>
</template>

<script>
import navigation from "~/components/Navigation.vue";
import footer from "~/components/Footer.vue";

export default {
  data: {
    colorStyle: "text-gray-500"
  },
  components: {
    navigation,
    footer
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