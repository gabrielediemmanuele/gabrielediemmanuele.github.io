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
