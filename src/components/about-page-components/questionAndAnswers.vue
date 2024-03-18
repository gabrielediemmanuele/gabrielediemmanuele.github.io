<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <!-- Question and Answers Accordion -->
  <section class="question-and-answers-section">
    <div class="container-fluid q-and-a-cont">
      <div class="text-cont text-center">
        <h1>Q & A</h1>
        <p>Per chi ha voglia di leggere, ecco altre risposte su di me!</p>
      </div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Perché ho scelto di fare il Web Developer ?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Come detto, sono "nato" artista. In realtà il mio rapporto con il
              mondo videoludico, ha contribuito a ispirarmi in un percorso come
              disegnatore. Dopo anni di studio da autodidatta, capii che non era
              una cosa che avrei voluto fare come lavoro ma come hobby. Intanto,
              essendo diplomato come Grafico Pubblicitario, dopo qualche anno al
              termine della scuola, ho potuto lavorare in un negozio di Grafica.
              Con i soldi che guadagnavo, pagavo dei corsi Online per migliorare
              le mie capacità. La mattina studiavo, il pomeriggio andavo al
              lavoro e col tempo ho imparato tante cose ma nel mentre anche il
              mondo della Grafica cambiava. Realizzai che solo con la Grafica,
              non sarei andato lontano e un giorno, casualmente, scoprii
              Boolean, un corso in Full-Stack Web-Developer intensivo di 6 mesi.
              A primo acchito, il pensiero di cominciare un nuovo percorso da 0
              mi intimoriva, ma non sapevo che sarebbe stata la scelta migliore
              non solo a livello lavorativo, ma anche per i bisogni della mia
              persona. Pur non sapendo nulla di programmazione, decisi di fare
              le prime 20 ore gratuite e al termine, essendo stupito di quante
              similitudinici ci fossero col mio percorso di grafico, decisi di
              iscrivermi. Dopo 6 mesi, pieni di sacrifici, impegno, dedizione e
              perseveranza, eccomi, sono un Junior Full-Stack Web Developer che
              da 0 ha imparato tanto e ha ancora molto da imparare 😁.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Si, sono un Web Developer, ma cosa mi motiva a continuare?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Diventare un Web Developer per me ha significato tante cose. Prima
              di tutto, avere un vero mestiere tra le mani, ma cosa più
              importante, mi ha permesso di unire tutti i miei "mondi". La
              fantasia e le mia abilità nel disegno, le mie conoscenze sul
              graphic design unite al metodo e alla logica, al pensiero astratto
              che si deve avere in programmazione. Perché contino? <br />
              Perché quando inizio a scrivere codice al mattino alle 8:30, senza
              rendermene conto si fà sera. Mi perdo nei ragionamenti e tra una
              pausa e un'altra trovo soluzioni, rifletto, indago. Credo che
              quando perdiamo la nostra concezione del tempo è lì' che troviamo
              la nostra passione. Per me non è solo una questione di lavoro o di
              soldi, ma anche di definirmi come persona e di fare qualcosa che
              mi faccia stare bene con me stesso e che mi dia soddisfazioni e
              onestamente, quanto mi diverto a fare Front-End! Ma anche il
              Back-End ha le sue sfaccettature eh!
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Quali sono i miei obbiettivi a breve termine (attualmente)?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Il mio obbiettivo a breve termine, è trasferirmi al nord italia e
              lavorare in un contesto positivo dove si stia bene. Dove ci sia la
              possibilità di lavorare con altre persone, confrontarsi, crescere,
              migliorare ed essere formati. Dove si dà valore all'impegno e ci
              sia una forma di meritocrazia! Un ambiente di lavoro, dove si
              lavora con gli altri in armonia, sostenendo non solo i propri
              valori ma anche quelli del progetto per cui si lavora.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Cosa sto facendo dopo Boolean
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Al momento sto cercando lavoro al nord Italia, in Piemonte (Torino
              e dintorni). Intanto continuo a studiare per conto mio,
              consolidando le mie lacune e realizzado piccoli progetti per
              rafforzare la mia logica. Studio su
              <a href="https://www.udemy.com/">Udemy</a> e al momento sto
              affrontando due corsi differenti: The Complete 2024 Web
              Development Bootcamp di Angela Yu (per ripassare e imparare cose
              nuove) e The Complete JavaScript Course 2024: From 0 to Expert di
              Jonas Schmedtmann per rafforzare la mia padronanza di JavaScript e
              permettermi di cimentarmi successivamente in Type Script / React e
              Angular.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Parli la lingua inglese ?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Ormai la maggior parte di quello che faccio da anni è in inglese.
              Dai corsi di apprendimento e formazione su Udemy, alla
              documentazione online, persino gli hobby come videogames e film o
              la lettura e la musica. Ecco perché il mio sito portfolio è
              sbadatamente metà italiano e metà in inglese! Sono fluente nella
              lettura e nella compresione.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Che tipo di persona sono?
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Sono una persona molto calma, empatica e sincera. Quando lavoro,
              dò il massimo e col massimo del rispetto. Non ho mai avuto
              problemi a relazionarmi con gli altri e spesso, quando conosco
              nuove persone, mi comporto come se già ci conoscessimo da un pò di
              tempo, ma con educazione e riguardo. Mi piace essere positivo,
              questo mi permette di affrontare situazioni di stress con maggior
              riflessione e tolleranza.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              La mia filosofia sullo "stress" e la programmazione
            </button>
          </h2>
          <div
            id="collapseSeven"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Sono cresciuto in un ambiente dove ho imparato a mie spese a
              gestire lo stress, soprattutto al lavoro e con le persone che mi
              circondano. Fare programmazione a volte può essere senza dubbio
              frustrante e stressante, ma credo anche che facciano la differenza
              il "dove" e "con chi". Io affronto la programmazione esattamente
              come la vita. La vita è fatta anche di pensieri, azioni, reazioni
              e problemi.
              <br />
              <em
                >A volte nella vita dobbiamo fare soltanto un console.log(life)
                capire bene quali sono i problemi, dividerli in piccoli passi e
                farne uno alla volta.
              </em>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Come ho costruito questo sito?
            </button>
          </h2>
          <div
            id="collapseEight"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Il sito portfolio è stato fatto con Vue.js + Vite e Bootstrap, col
              tempo farò migliorie, ottimizzazioni e un pò di refactoring del
              codice! Le grafiche e le immagini sono state realizzate da me. Lo
              stesso vale per Mokujin di Tekken (il burattino nella sezione
              Altro su di me) che realizzai tempo fa su Blender!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.q-and-a-cont {
  margin-top: 40px;
  padding: 25px;
  background-color: rgb(3, 35, 54);
  color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .text-cont {
    p {
      font-size: 18px;
      font-style: italic;
      color: rgb(141, 189, 218);
    }
  }
  #accordionExample {
    width: 80%;
    .accordion-item {
      color: rgb(3, 35, 54) !important;
    }
  }
}
</style>
