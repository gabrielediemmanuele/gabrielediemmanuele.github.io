<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      weight: null,
      height: null,
      showResult: false,
      maxWeight: 200,
      maxHeight: 2.5,
    };
  },

  computed: {
    resultImage() {
      const bmi = this.calculateBMIvalue();
      if (bmi < 18.5) {
        return "Underweight.jpg";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Healthy-Weight.jpg";
      } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight.jpg";
      } else {
        return "Obesity.jpg";
      }
    },
    bmiMessage() {
      const bmi = this.calculateBMIvalue();
      if (bmi < 18.5) {
        return "Serve più massa!";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Sei in gran salute, complimenti!";
      } else if (bmi >= 25 && bmi <= 29.9) {
        return "Sei un pò in sovrappeso, fai un pò di attività fisica!";
      } else {
        return "Sei in uno stato di Obesità, prendi provvedimento al più presto!";
      }
    },
  },
  methods: {
    calculateBMI() {
      if (this.weight && this.height) {
        this.showResult = true;
      }
    },
    calculateBMIvalue() {
      const bmi = this.weight / (this.height * this.height);
      return bmi.toFixed(2);
    },
    reset() {
      this.showResult = false;
      this.weight = null;
      this.height = null;
    },
  },
};
</script>

<template>
  <!-- Inputs container -->
  <div class="bmi-calculator" v-if="!showResult">
    <input
      v-model.number="weight"
      type="number"
      placeholder="Peso (Kg)"
      :max="maxWeight"
      required
    />
    <input
      v-model.number="height"
      type="number"
      placeholder="Altezza (m, cm)"
      :max="maxHeight"
      required
    />
    <button @click="calculateBMI">Get BMI</button>
  </div>
  <!-- result container  -->
  <div v-else>
    <img :src="resultImage" alt="BMI Image" />
    <p>{{ bmiMessage }}</p>
    <button @click="reset">Back</button>
  </div>
</template>

<style lang="scss" scoped></style>
