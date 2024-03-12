<script>
import introPage from "../../ui-element/introPage.vue";
import projectLayout from "../../ui-element/projectLayout.vue";

export default {
  data() {
    return {
      about: {
        title: "ft-begin",
        subtitle: "Progetti front-end realizzati all'inizio del corso.",
        description:
          "Tengo a mostrare i primissimi progetti realizzati in Boolean, anche per dare l'idea \
          dei miglioramenti avuti nel tempo (e sicuramente c'è ancora tanto da imparare) \
          ma vedere l'inizio del cammino, mostra anche quanta strada ho fatto!",
        introImagePath:
          "../../../../public/images/Front-End-Begin/portfolio-front-end-mix.png",
      },
      project: {
        objParagraph: "bla",
        functionsParagraph: "bla",
        videoPath:
          "../../../../public/images/Front-End-Begin/start-front-end.mp4",
      },
      cards: [
        {
          cardImage: "../../../../public/images/Front-End-Begin/zalando.png",
          cardTitle: "bla",
          cardDescription: "bla",
        },
        {
          cardImage: "../../../../public/images/Front-End-Begin/discord.png",
          cardTitle: "bla",
          cardDescription: "bla",
        },
        {
          cardImage: "../../../../public/images/Front-End-Begin/dropbox.png",
          cardTitle: "bla",
          cardDescription: "bla",
        },
        {
          cardImage: "../../../../public/images/Front-End-Begin/spotify.png",
          cardTitle: "bla",
          cardDescription: "bla",
        },
        {
          cardImage:
            "../../../../public/images/Front-End-Begin/layout-bootstrap.png",
          cardTitle: "bla",
          cardDescription: "bla",
        },
      ],
    };
  },

  components: {
    introPage,
    projectLayout,
  },
};
</script>

<template>
  <introPage
    :title="about.title"
    :subtitle="about.subtitle"
    :description="about.description"
    :imgPath="about.introImagePath"
    :circular="false"
    :rectangular="true"
  ></introPage>

  <projectLayout
    :objParagraph="project.objParagraph"
    :functionsParagraph="project.functionsParagraph"
    :videoPath="project.videoPath"
    :cards="cards"
  ></projectLayout>
</template>

<style lang="scss" scoped></style>
