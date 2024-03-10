<script>
import introPage from "../ui-element/introPage.vue";

export default {
  data() {
    return {
      about: {
        title: ".portfolio",
        subtitle: "Date un occhiata ai miei ultimi lavori e studi.",
        description:
          "Nel mio portfolio troverete lavori e casi di studio sia Front-End che Back-End oltre che progetti personali \
          e lavori di Graphic Design alcuni dei quali sono entrati in commercio. Buona visione.",
        introImagePath:
          "../../../public/images/portfolio/portoflio-cover-image.png",
      },
    };
  },

  components: {
    introPage,
  },
};
</script>

<template>
  <!-- Intro-Page-Portfolio -->
  <introPage
    :title="about.title"
    :subtitle="about.subtitle"
    :description="about.description"
    :imgPath="about.introImagePath"
    :circular="false"
    :rectangular="true"
  >
  </introPage>
</template>

<style lang="scss" scoped></style>
