<script>
import introPage from "../../ui-element/introPage.vue";
import projectLayout from "../../ui-element/projectLayout.vue";

export default {
  data() {
    return {
      about: {
        title: "front-advanced",
        subtitle: "Progetti Front-End + JavaScript, Vue e Vite.",
        description:
          "In questa sezione, sono presenti progetti Front-end che alzano l'asticella di difficoltà\
          includendo JavaScript, Vue e Vite.",
        introImagePath:
          "../../../../public/images/Front-End-Advanced/vue-vite-works-collection.png",
      },
      project: {
        objParagraph:
          "Durante il percorso in Boolean, dopo HTML e CSS abbiamo studiato Java Script e un framework ad esso associato, Vue.js e Vite (a sostegno di Vue). \
        Con JavaScript, abbiamo potuto rendere reattivi e animati i nostri progetti, con Vue, ottimizzare il codice e con Vite, creare una struttura di scaffolding più pulita e intuitiva e personalmente\
        ho adorato lavorare con Vue + Vite, motivo per il quale ho realizzato con queste tecnologie il Portfolio. Infine abbiamo anche utilizzato, Axios per effettuare le chiamate API.",
        functionsParagraph:
          "Il primo progetto è un carosello ispirato a quello di Playstation basato sull'indicizzazione dei vari elementi, eventi al click che spostano l'indice da un elemento all'altro, rilevando e mostrando l'immagine attualmente\
          selezionata e come extra un setTime che fà scorrere le immagini fin tanto che l'utente non sia in hover su quella 'grande' che fermerà il setTime fin tanto che il cursone rimanga al suo interno.\
          Il secondo progetto è una riproduzione di Whats App, dove c'è la possibilità di filtrare ogni utente nella nostra chat e dove ogni utente, ha una sua chat popolata di messaggi\
          che possono anche essere eliminati. Scrivendo e inviando un messaggio, si riceve persino una risposta automatizzata!\
          Il terzo progetto è ispirato a un ipotetica Home-page del sito DC-Comics, dove tramite chiamata API con axios, riceviamo un oggetto di vari comics\
          da utilizzare per popolare il nostro 'negozio'. Cito un app particolarmente utile, 'postman' ,che abbiamo utilizzato per verificare la struttura dei dati API.\
          Molto simile anche il quarto progetto, ispirato a Yu-Gi-Oh! dove semplicemente tramite chiamata API riceviamo tutte le carte esistenti e tramite filtro, possiamo risalire\
          alla tipologia di nostro interesse e ottenere anche un risultato che conta quante carte sono state trovate.\
          Per concludere, con gli stessi principi, una riproduzione di Netflix (Boolflix), dove tramite chiamata API riceviamo sia Serie TV che Film, questi, dopo la ricerca, appaiono e\
          vengono separati in layout tra Tv Series e Movies. Ogni film, in hover sulla sua copertina, presenta anche una descrizione, una lingua che è contrassegnata da una bandiera assegnata dinamicamente e un punteggio in stelle\
          anche questo basato su una logica JavaScript.",
        videoPath: "../../../../public/images/Front-End-Advanced/vue-vite.mp4",
      },
      cards: [
        {
          cardImage:
            "../../../../public/images/Front-End-Advanced/playstation-slider.png",
          cardTitle: "Playstation Slider",
          cardDescription: "Vue, JS",
        },
        {
          cardImage: "../../../../public/images/Front-End-Advanced/boolzap.png",
          cardTitle: "Boolzap",
          cardDescription: "Vue, JS",
        },
        {
          cardImage:
            "../../../../public/images/Front-End-Advanced/dc-comics.png",
          cardTitle: "Dropbox",
          cardDescription: "Vue, Vite, API",
        },
        {
          cardImage:
            "../../../../public/images/Front-End-Advanced/yu-gi-oh-api.png",
          cardTitle: "Yu-gi-Oh! API",
          cardDescription: "Vue, Vite, API",
        },
        {
          cardImage:
            "../../../../public/images/Front-End-Advanced/boolflix.png",
          cardTitle: "Boolflix",
          cardDescription: "Vue, Vite, API",
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
