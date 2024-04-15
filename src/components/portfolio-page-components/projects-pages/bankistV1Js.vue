<script>
import introPage from "../../ui-element/introPage.vue";
import projectLayout from "../../ui-element/projectLayout.vue";

export default {
  data() {
    return {
      about: {
        title: "Bankist-V1-Js",
        subtitle: "Bank Simulator + Array Methods",
        description:
          "Bankist è una piccola 'App' realizzata per studiare i metodi legati agli Array e che si ispira alle logiche legate alle operazioni bancarie.",
        introImagePath: "/images/bankist-v1-js.png",
      },
      project: {
        objParagraph:
          "L'obbiettivo è stato quello di apprendere metodi legati agli array, su come strutturare dei dati (in questo caso fittizzi), gestire e formattare,\
          data e valuta in base al proprio luogo di appartenenza. Lavoro con un estetica chiara e pulita da leggere, volontariamente semplice e intuitiva perché legata\
          principalmente allo studio delle logiche del suo funzionamento.",
        functionsParagraph:
          "In questa piccola app, i cui dati sono già pre-impostati, quindi alla base non c'è un back-end ne un database, l'utente durante la sessione\
          può effettuare diverse operazioni quali: Log-in, tramite un in che viene formattato prendendo le iniziali di nome e cognome in lower case e una password.\
          Una volta loggato, l'utente può vedere il suo resoconto, prelievi e versamenti. Può anche compiere operazioni quali: chiedere un prestito e ottenere una somma\
          fare un bonifico o cancellare il proprio account. Tutte le operazioni legate al denaro, verranno registrate e mostrate nelle operazioni effettuate \
          accompagnate da data e ora del giorno adeguatamente formattati in base alla tempistica nel quale sono state effettuate. Quando l'utente si trova all'interno dell'app\
          ha un timer di protezione per il quale, se non compie operazioni entro un certo quantitativo di tempo (5 minuti), verrà sloggato.\
          Infine vi è anche una funzione di sorting, che serve per disporre le operazioni effettuate in ordine crescente o riportarle in ordine di data.",
        videoPath: "/images/bankist-v1-js.mp4",
      },
      cards: [
        {
          cardImage: "/images/bankist-v1-js.png",
          cardTitle: "Bankist full app",
          cardDescription: "HTML, CSS, JS",
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
