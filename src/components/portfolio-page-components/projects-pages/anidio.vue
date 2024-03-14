<script>
import introPage from "../../ui-element/introPage.vue";
import projectLayout from "../../ui-element/projectLayout.vue";

export default {
  data() {
    return {
      about: {
        title: "Anidio",
        subtitle: "Progetto 'finale' sezione Front-End",
        description:
          "Anidio è stato il mio progetto finale della sezione 'Front-end' che racchiude tutto quello che ho appreso,\
          da HTML CSS a Java Script, Vue(+ Vite) e il layout structure & responsive.",
        introImagePath: "../../../../public/images/anidio-rocket.png",
      },
      project: {
        objParagraph:
          "Anidio è una società fittizzia che si occupa della realizzazione di materiale  video, 3d e animazione. L'obbiettivo\
          del progetto è stato quello di realizzare una front-page (home-page) accattivante con il materiale digitale fornito da un ipotetico\
          graphic designer. In tre giorni, ho potuto realizzare questa grande unica pagina web, applicando anche il metodo di strutturazione\
          con vue + vite. E' stato un progetto molto divertente, dove oltre alla struttura, ho messo in campo anche le mie abilità da graphic designer\
          utilizzando il materiale grafico fornito per semplificare il lavoro.",
        functionsParagraph:
          "Nella pagina sono presenti effetti di hover. Alcuni layout essendo simili tra di loro, sono stati costruiti su una componente figlio che poi\
          è stato riutilizzato su componenti genitori popolati tramite props e oggetti. Le componenti non ripetibili, sono state realizzate nella loro interezza\
          e ottimizzate soltanto in parte tramite scss e stili ramificati / mixin e variables di stile preconfezionate oltre che ovviamente all'utilizzo di cicli e condizioni v-for /v-if\
          per la generazioni di elementi ripetuti, come i loghi e le cards. Tutto il layout è stato fatto con l'estremo utilizzo del nostro\
          adorato display: flex. Tra le funzioni più interessanti, c'è lo slider che riguarda i membri del team, un estensione per riportare alla cima della pagina e un piccolo\
          form per inviare la mail.",
        videoPath: "../../../../public/images/anidio.mp4",
      },
      cards: [
        {
          cardImage: "../../../../public/images/Anidio.png",
          cardTitle: "Anidio Complete Layout",
          cardDescription: "Vue + Vite, JS",
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
