<script>
import introPage from "../ui-element/introPage.vue";

export default {
  data() {
    return {
      about: {
        title: ".about",
        subtitle:
          "Nato come artista, Graphic Designer per caso, Web-Dev per scelta.",
        description:
          "Fin da bambino, ho sempre avuto una passione e predisposizione per la creatività. \
           Ho inziato disegnando i personaggi di videogames e film, crescendo mi sono cimentato \
           nel Graphic Design in autonomia e infine, ho unito entrambi i mondi sul codice, \
           specializzandomi come !Jr Full-Stack Web-Develoer con una predisposizione per il Front-End.\
           Oltre il codig, mi piace fare tanto altro! Scoprilo qui sotto!",
        introImagePath: "../../../public/images/aboutpage.png",
      },
    };
  },

  components: {
    introPage,
  },
};
</script>

<template>
  <introPage
    :title="about.title"
    :subtitle="about.subtitle"
    :description="about.description"
    :imgPath="about.introImagePath"
  >
  </introPage>
  <div class="image-card"></div>
</template>

<style lang="scss" scoped></style>
