<script>
import introPage from "../ui-element/introPage.vue";
import aboutMeImages from "../about-page-components/aboutImagesGallery.vue";
import aboutMeSkills from "../about-page-components/aboutMeSkills.vue";
import questionAndAnswers from "../about-page-components/questionAndAnswers.vue";
import moreAboutMe from "../about-page-components/moreAboutMe.vue";

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
           specializzandomi come !Jr Full-Stack Web-Developer presso Boolean con una predisposizione per il Front-End.\
           Oltre il codig, mi piace fare tanto altro! Scoprilo qui sotto!",
        introImagePath: "../../../dist/assets/aboutpage.png",
      },
    };
  },

  components: {
    introPage,
    aboutMeImages,
    aboutMeSkills,
    questionAndAnswers,
    moreAboutMe,
  },
};
</script>

<template>
  <!-- Intro-Page-About -->
  <introPage
    :title="about.title"
    :subtitle="about.subtitle"
    :description="about.description"
    :imgPath="about.introImagePath"
    :circular="true"
    :rectangular="false"
  >
  </introPage>
  <!--Image Gallery-->
  <aboutMeImages></aboutMeImages>

  <!--Skills Section -->
  <aboutMeSkills></aboutMeSkills>

  <!-- Q&A Accordion -->
  <questionAndAnswers></questionAndAnswers>

  <!--More About Me-->
  <moreAboutMe></moreAboutMe>
</template>

<style lang="scss" scoped></style>
