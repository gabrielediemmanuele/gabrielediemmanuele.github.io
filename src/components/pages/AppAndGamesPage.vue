<script>
import introPage from "../ui-element/introPage.vue";
import appsContainer from "../app-and-games-components/appsContainer.vue";
import gamesContainer from "../app-and-games-components/gamesContainer.vue";

export default {
  data() {
    return {
      appsAndGames: {
        title: ".apps & games",
        subtitle: "Apps e giochi interattivi 🎮",
        description:
          "In questa sezione voglio mettere piccole app e giochi realizzati da me durante \
          il mio percorso di studio, per rendere il sito più interattivo e piacevole! Quindi,\
          non vi resta che provarli.. e ovviamente, 'sia lodato il sole'.",
        introImagePath: "/images/dark-souls-bonfire.gif",
        imageStyles: {
          width: "50%",
          transform: "scaleX(-1)",
        },
      },
    };
  },

  components: {
    introPage,
    appsContainer,
    gamesContainer,
  },
};
</script>

<template>
  <!-- Intro-Page-Portfolio -->
  <introPage
    :title="appsAndGames.title"
    :subtitle="appsAndGames.subtitle"
    :description="appsAndGames.description"
    :imgPath="appsAndGames.introImagePath"
    :circular="false"
    :rectangular="true"
    :imageStyles="appsAndGames.imageStyles"
  >
  </introPage>
  <!--  Projects cards  -->
  <appsContainer> </appsContainer>
  <!--   Graphic Design Section -->
  <gamesContainer></gamesContainer>
</template>

<style lang="scss" scoped></style>
