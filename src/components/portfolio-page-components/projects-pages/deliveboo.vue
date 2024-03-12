<script>
import introPage from "../../ui-element/introPage.vue";
import projectLayout from "../../ui-element/projectLayout.vue";

export default {
  data() {
    return {
      about: {
        title: "DeliveBoo",
        subtitle: "Progetto Finale in Boolean",
        description:
          "DeliveBoo è il progetto finale affrontato nel corso intesivo di 6 mesi in Boolean per diventare Full-Stack Web-Developer\
          , che unisce tutto quello che ho appreso sia Front-End (realizzato con Vue + Vite) che Back-End (realizzato con Laravel e MySql).",
        introImagePath: "../../../../public/images/Deliveboo/deliveboo.png",
      },
      project: {
        objParagraph:
          "DeliveBoo è stato un grande progetto dalla durata di tre settimane, dove non solo ho dovuto utilizzare tutti gli strumenti a mia\
          disposizione appresi durante il corso, ma ho affrontato anche delle novità, come il lavorare in team (formato da 5 persone), lavorare con i branch e con una\
          repository condivisa e soprattutto senza l'aiuto o l'assistenza di un insegnate che ci desse indicazioni o correzzioni.\
          L'obbiettivo del progetto è stato quello di realizzare un app simile a Deliveroo, con un lato Back-Office, dove il ristoratore\
          potesse registrarsi, creare il suo ristorante e ad esso, associare pietanze e ordinazioni. Lato Front-office invece l'utente può\
          ordinare le pietanze da un ristorante per volta, filtrando per tipologia, e una volta inseriti i prodotti nel carrello, procedere con il\
          pagamento. Tra i vari obbiettivi tecnici, infine, l'organizzazione, il lavoro di squadra, il rispetto altrui ma soprattutto la condivisione\
          l'inpegno e la testardaggine nonchè le capacità specifiche dei membri del team, hanno reso possibile la realizzazione di questo progetto. Imparare\
          a lottare anche quando sembra impossibile e superare la frustrazione con l'impegno e la determinazione.",
        functionsParagraph:
          "Per questo progetto, ho realizzato un video dove spiego in effetti come funziona l'applicazione ma riassumo anche testualmente\
          tutte le sue funzionalità. Il progetto è diviso in due grandi parti, un back-office e un front-office.\
          E alla base di tutto, abbiamo costruito un database con le varie relazioni pensate in anticipo, infatti ogni ristorante\
          avrà un suo id al quale saranno associati piatti e ordinazioni.\
          Nel back-office, dedicato ai ristoratori, il cliente può registrarsi e successivamente creare il suo ristorante.\
          Può crere/modificare/cancellare o invertire la visibilità dei piatti e visualizzare tutte le ordinazioni che ovviamente,\
          rimangono registrate in database (utilizzando MAMP e MySQL) dopo il pagamento (sistema che abbiamo creato appogiandoci a \
          Braintree di PayPal, che mette a disposizioni anche dati fittizzi per simulazioni).\
          Lato Front-Office, l'utente può visualizzare, filtrare  e visitare i vari ristoranti. Di ogni ristorante, può visualizzare e ordinare i piatti\
          senza limiti di quantità, ma con la restrizione di ordinare da un solo ristorante per volta e procedere al pagamento o in caso di\
          ripensamenti, svuotare il carrello.\ All'interno del progetto sono anche stati presi provvedimenti: tutti i form sono protetti da validazione e restrizioni,\
          in caso di errore, l'utente verrà avvisato. Altri ristoratori non possono visitare tramite la barra di ricerca altri ristoratori e ci sono dei blocchi di protezione\
          affiché i dati che devono rimanere anonimi, lo siano. Infine, l'app, sia front che back è responsive e quindi, godibile da ogni dispositivo.",
        videoPath: "../../../../public/images/Deliveboo/deliveboo.mp4",
      },
      cards: [
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo1.png",
          cardTitle: "Deliveboo Home Front-Office",
          cardDescription: "Vue + Vite, Laravel, MySql",
        },
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo2.png",
          cardTitle: "Deliveboo PayForm",
          cardDescription: "Vue + Vite, Laravel, MySql",
        },
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo3.png",
          cardTitle: "Deliveboo PayForm",
          cardDescription: "Vue + Vite, Laravel, MySql",
        },
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo4.png",
          cardTitle: "Deliveboo Restaurant",
          cardDescription: "Vue + Vite, Laravel, MySql",
        },
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo5.png",
          cardTitle: "Deliveboo Empty Cart",
          cardDescription: "Vue + Vite, Laravel, MySql",
        },
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo6.png",
          cardTitle: "Deliveboo Cart",
          cardDescription: "Vue + Vite, Laravel, MySql",
        },
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo7.png",
          cardTitle: "Deliveboo Order",
          cardDescription: "Vue + Vite, Laravel, MySql",
        },
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo8.png",
          cardTitle: "Deliveboo Home Back-Office",
          cardDescription: "Vue + Vite, Laravel, MySql",
        },
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo9.png",
          cardTitle: "Deliveboo Log-in",
          cardDescription: "Vue + Vite, Laravel, MySql",
        },
        {
          cardImage: "../../../../public/images/Deliveboo/deliveboo10.png",
          cardTitle: "Deliveboo Restaurant Back-office",
          cardDescription: "Vue + Vite, Laravel, MySql",
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
