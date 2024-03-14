<script>
import introPage from "../../ui-element/introPage.vue";
import projectLayout from "../../ui-element/projectLayout.vue";

export default {
  data() {
    return {
      about: {
        title: "front-begin",
        subtitle: "Progetti front-end realizzati all'inizio del corso.",
        description:
          "Tengo a mostrare i primi progetti realizzati in Boolean, per dare l'idea \
          dei miglioramenti avuti nel tempo (e sicuramente c'è ancora tanto da imparare) \
          ma vedere l'inizio del cammino, mostra anche quanta strada ho fatto!",
        introImagePath: "/images/portfolio-front-end-mix.png",
      },
      project: {
        objParagraph:
          "All'inizio è stato fondamentale per me capire bene HTML e CSS, come strutturare una pagina web,\
        dividerla in porzioni, utilizzare tag semantici e un Css pulito e funzionale evitando, dove possibile,\
        delle ripetizioni del codice; allineare gli elementi all'interno della pagina web (sia lodato il FLEX) e gli effetti di :hover.\
        Infine, abbiamo anche fatto pratica con le media query, i break-points e su come rendere un'app responsive e godibile in\
        qualsiasi dispositivo, includendo anche quel biricchino di Bootstrap nel processo di apprendimento.\
        \n Di seguito, potrete visionare progetti ispirati ad app realmente esistenti, come Zalando, Discord, Dropbox, Zoom e Spotify che è stato\
        il capolinea prima del progetto 'finale' legato al Front-End che troverete nella sua apposita sezione.",
        functionsParagraph:
          "Si comincia dal prototipo di Zalando, ove il focus dell'esercizio è stato quello di creare un effetto hover legato ai prodotti, \
        l'utilizzo del 'position' e ovviamente la struttura della pagina web base. A seguire, layout di Discord, Zoom e Dropbox (non presente in video), per far pratica con Flex\
        e creare layout complessi. In conclusione, un layout ispirato proprio a Boolean realizzato con Bootstrap e l'interfaccia di Spotify\
        svolta per scelta solo in HTML e CSS e l'utilizzo di media Query realizzate da 0 il cui focus era proprio creare app responsive con menù ed elementi a scomparsa.",
        videoPath: "/images/start-front-end.mp4",
      },
      cards: [
        {
          cardImage: "/images/zalando.png",
          cardTitle: "Zalando",
          cardDescription: "HTML, CSS, :hover, position",
        },
        {
          cardImage: "/images/discord.png",
          cardTitle: "Discord",
          cardDescription: "HTML, CSS, Flex",
        },
        {
          cardImage: "/images/dropbox.png",
          cardTitle: "Dropbox",
          cardDescription: "HTML, CSS, Flex",
        },
        {
          cardImage: "/images/spotify.png",
          cardTitle: "Spotify",
          cardDescription: "HTML, CSS, responsive",
        },
        {
          cardImage: "/images/layout-bootstrap.png",
          cardTitle: "Boolean + Bootstrap",
          cardDescription: "HTML, CSS, Bootstrap",
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
