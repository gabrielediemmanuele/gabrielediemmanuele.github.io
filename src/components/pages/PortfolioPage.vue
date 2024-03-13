<script>
import introPage from "../ui-element/introPage.vue";
import worksContainer from "../portfolio-page-components/worksContainer.vue";
import graphicDesignCont from "../portfolio-page-components/graphicDesignCont.vue";
export default {
  data() {
    return {
      about: {
        title: ".portfolio",
        subtitle:
          "Qui trovi i miei progetti, lavori e studi come Dev e Designer.",
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
    worksContainer,
    graphicDesignCont,
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
  <!--  Projects cards  -->
  <worksContainer> </worksContainer>
  <!--   Graphic Design Section -->
  <graphicDesignCont></graphicDesignCont>
</template>

<style lang="scss" scoped></style>
