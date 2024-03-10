<script>
import introPage from "../ui-element/introPage.vue";

export default {
  data() {
    return {
      about: {
        title: ".portfolio",
        subtitle: "Date un occhiata ai miei ultimi lavori e studi.",
        description:
          "Ho iniziato il percorso come Sviluppatore Web in Boolean,\
          in questa sezione troverete molti dei miei lavori e casi di studi svolti, sia Front-End che Back-End,\
          all'interno del corso. Questa sezione sarà aggiornata, ma altri miei lavori personali sono presenti su App & Games!\
          A seguito dei lavori come Web Dev, accompagno anche alcuni dei miei lavori come Graphic Designer. Buona visione!",
        introImagePath: "../../../public/images/ghost-rider-paint.jpg",
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
