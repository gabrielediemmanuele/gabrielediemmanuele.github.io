<script>
import introPage from "../../ui-element/introPage.vue";
import projectLayout from "../../ui-element/projectLayout.vue";

export default {
  data() {
    return {
      about: {
        title: "Forkify",
        subtitle: "Recipes Research and Custom Recipes",
        description:
          "Forkify è una piccola app realizzata in Java Script puro come esercizio del corso udemy che ho seguito su JS e dà la possibilità di cercare ricette presenti online o di crearne di proprie e salvarle.",
        introImagePath: "/images/forkify_cover_img.png",
      },
      project: {
        objParagraph:
          "Forkify è la somma di tutto ciò che ho appreso nel corso di Jonas Schmedtmann 'The Complete JavaScript Course 2024: From zero to Expert.' presente su Udemy.\
          Grazie a questo corso e in particolare alla realizzazione di questa app, ho potuto aggiungere alla mia valigia su JavaScript tante nuove informazioni.",
        functionsParagraph:
          "In questa app è possibile, prima di tutto, effettuare una ricerca di ricette presenti online tramite una parola chiave. Una volta effettuata la ricerca\
          se sono presenti delle ricette, verrano visualizzate in colonna alla sinistra del layout, altrimenti, verremo avisati che non ci sono ricette disponibili (per esempio, inserendo parole sbagliate o numeri).\
          Una volta ottenute tutte le ricette, è possibile navigarle tramite apposita navigazione in basso, che si comporta in modo reattivo. E' anche possibile visualizzare la ricetta cliccando\
          e quest'ultima verrà mostrata sul layout nella parte destra con tutte le informazioni ad essa associate. E' perfino possibile aumentare e diminuire il numero di persone da 'servire'\
          così' che l'app calcoli automaticamente la proporzione degli ingredienti. Un'altra feature importate è la possibilità di salvare(o rimuovere) tra i 'preferiti'\
          le nostre ricette preferite ed eventualmente visualizzarle immediatamente dall'apposito menù a comparsa. Ultima feature, è la possibilità di creare le nostre ricette\
          rispettando le regole del form e poterle salvare. I dati verranno mantenuti grazie al localStorage presente nell'app che permetterà di mantenere i dati anche ricaricando la pagina. \
          Ogni ricetta creata dall'utente verrà segnalata con un icona cosi da distinguerle da quelle online.",
        videoPath: "/images/forkify-demo.mp4",
      },
      cards: [
        {
          cardImage: "/images/forkify-1.png",
          cardTitle: "Forkify Empty Layout",
          cardDescription: "JS",
        },
        {
          cardImage: "/images/forkify-2.png",
          cardTitle: "Forkify Research and Visualization",
          cardDescription: "JS",
        },
        {
          cardImage: "/images/forkify-3.png",
          cardTitle: "Forkify 'Bookmarks' (Preferiti)",
          cardDescription: "JS",
        },
        {
          cardImage: "/images/forkify-4.png",
          cardTitle: "Forkify Form",
          cardDescription: "JS",
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
