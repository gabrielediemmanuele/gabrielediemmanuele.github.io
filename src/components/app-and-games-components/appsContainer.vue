<script>
import card from "../ui-element/card.vue";

export default {
  data() {
    return {
      apps: [
        {
          appImage: "/images/bmi-calculator-image.png",
          appTitle: "BMI-Calculator",
          appDescription:
            "Vuoi sapere il tuo indice di massa corporea ? Prova Subito. ",
          appRoute: "bmiCalculator",
        },
      ],
    };
  },

  components: {
    card,
  },
};
</script>

<template>
  <!-- My portfolio works -->
  <section class="myWorks">
    <div class="container-fluid portfolio-cont">
      <h1 class="portfolio-title text-center">Apps 👨🏻‍💻</h1>
      <p class="text-center">
        Benvenuto nella sezione apps! Qui troverai piccole app utili sviluppate
        per studio! <br />
        Enjoy!
      </p>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="(app, index) in apps"
          :key="index"
        >
          <card
            :cardImage="app.appImage"
            :cardTitle="app.appTitle"
            :cardDescription="app.appDescription"
            :cardRoute="app.appRoute"
          ></card>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-cont {
  background-color: rgb(3, 35, 54);
  color: white;
  padding: 50px;

  //box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4);
  h1 {
    color: rgb(79, 149, 189);
  }
  p {
    font-style: italic;
  }
  .row {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
  }
}
</style>
