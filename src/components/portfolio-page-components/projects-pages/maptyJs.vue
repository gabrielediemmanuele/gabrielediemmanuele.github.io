<script>
import introPage from "../../ui-element/introPage.vue";
import projectLayout from "../../ui-element/projectLayout.vue";

export default {
  data() {
    return {
      about: {
        title: "Mapty JS - Workout",
        subtitle: "Mark your favourite locations.",
        description:
          "Mapty è un piccolo progetto basato sulla geolocalizzazione (+ Leaflet Library), programmazione ad oggetti con Java Script puro e local Storage.",
        introImagePath: "/images/mapty-js-cover.png",
      },
      project: {
        objParagraph:
          "In questo progetto ho potuto sperimentare l'utilizzo della geolocalizzazione con JavaScript e l'apposita API del browser unita alla libreria di leaflet-js che\
          mette a disposizione metodi per creare una mappa del mondo dinamica e la possibilità di creare marchi e popup custom, l'utilizzo di una struttura dati con la programmazione ad oggetti ES6\
          di Java Script e l'utilizzo di localStorage(API) per mantenere i dati anche dopo la ricarica della pagina.",
        functionsParagraph:
          "Anche se Mapty sembra un piccolo progetto, in realtà nasconde tante funzionalità. All'avvio della pagina si presenta l'interfaccia del progetto\
        divisa in due porzioni, una parte di layout destinata al form per creare i Popup e la mappa. L'utente, solo dopo aver dato il consenso per accedere alla posizione (altrimenti si otterrà un errore), \
        verrà, già al caricamento, posizionato dinamicamente sulla sua posizione attuale. Una volta cliccato sulla mappa il luogo di interesse, sarà possibile tramite apposito form,\
        (che dispone di controlli di validità in caso di inserimento di testo e che prevede quindi solo numeri 'finiti'), scegliere tra percorso a piedi o in bicicletta e una volta stabilito, inserire informazioni\
        quali velocità, tempo di percorrenza e 'ritmo' o 'pendenza' che dipendono dal tipo di attività. Una volta compilato il form, premendo enter (invio), il popup verrà generato e con esso anche un elemento\
        corrispondente al popup. Cliccare su un elemento corrispondente al popup, porterà subito l'utente con la vista proprio sopra il popup, cosi che non possa perderli di vista.\
        Popup ed elementi rimangono presenti anche ricaricando la pagina ma qualora l'utente necessiti di cancellarli, è presente un semplice bottone che al click, mostrerà una modale\
        che chiederà conferma all'utente prima di proseguire.\
        Non resta quindi che salvare tutti i luoghi in cui ci piace svolgere la nostra attività fisica, senza perderli mai di vista.",
        videoPath: "/images/mapty-demo.mp4",
      },
      cards: [
        {
          cardImage: "/images/mapty-js-1.png",
          cardTitle: "Mapty empty map",
          cardDescription: "HTML, CSS, JS, API, LEAFLET Library",
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
