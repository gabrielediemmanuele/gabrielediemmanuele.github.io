<script>
import introPage from "../ui-element/introPage.vue";

export default {
  data() {
    return {
      about: {
        title: ".about",
        subtitle:
          "Nato come artista, Graphic Designer per caso, Web-Dev per scelta.",
        description: "",
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
</template>

<style lang="scss" scoped></style>
