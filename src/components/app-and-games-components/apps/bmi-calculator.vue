<script>
export default {
  data() {
    return {
      weight: null,
      height: null,
      showResult: false,
      showWarning: false,
      maxWeight: 200,
      minWeight: 0,
      maxHeight: 2.5,
      minHeight: 0,
    };
  },
  //image, message and value
  computed: {
    resultImage() {
      const bmi = this.calculateBMIValue();
      if (bmi < 18.5) {
        return "underweight.jpg";
      } else if (bmi >= 18.5 && bmi < 25) {
        return "normal.jpg";
      } else {
        return "overweight.jpg";
      }
    },
    bmiMessage() {
      const bmi = this.calculateBMIValue();
      if (bmi < 18.5) {
        return "Serve più massa";
      } else if (bmi >= 18.5 && bmi < 25) {
        return "Il tuo peso forma è perfetto";
      } else {
        return "Dovresti perdere peso";
      }
    },
    bmiValue() {
      return this.calculateBMIValue();
    },
  },
  //calculate bmi to show result or warning + calculate bmi-value and reset.
  methods: {
    calculateBMI() {
      if (
        this.weight &&
        this.height &&
        this.weight >= this.minWeight &&
        this.weight <= this.maxWeight &&
        this.height >= this.minHeight &&
        this.height <= this.maxHeight
      ) {
        this.showResult = true;
        this.showWarning = false;
      } else {
        this.showWarning = true;
      }
    },
    calculateBMIValue() {
      if (this.weight && this.height) {
        const bmi = this.weight / (this.height * this.height);
        return bmi.toFixed(2);
      }
      return null;
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
  <div class="bmi-calculator" v-if="!showResult">
    <input
      v-model.number="weight"
      type="number"
      placeholder="Peso (kg) es. 60.5"
      :max="maxWeight"
      :min="minWeight"
      required
    />
    <p
      v-if="weight && (weight < minWeight || weight > maxWeight)"
      class="error"
    >
      Il peso deve essere compreso tra {{ minWeight }} kg e {{ maxWeight }} kg
    </p>
    <input
      v-model.number="height"
      type="number"
      placeholder="Altezza (metri) Es. 1.20 "
      :max="maxHeight"
      :min="minHeight"
      required
    />
    <p
      v-if="height && (height < minHeight || height > maxHeight)"
      class="error"
    >
      L'altezza deve essere compresa tra {{ minHeight }} metri e
      {{ maxHeight }} metri
    </p>
    <button @click="calculateBMI">Calcola BMI</button>
    <p v-if="showWarning" class="warning">Inserisci i dati correttamente</p>
  </div>
  <div class="result-container" v-else>
    <img :src="resultImage" alt="BMI Image" />
    <p>{{ bmiMessage }}</p>
    <p>Il tuo indice di massa corporea (BMI) è: {{ bmiValue }}</p>
    <button @click="reset">Calcola di nuovo</button>
  </div>
</template>
<style lang="scss" scoped>
.bmi-calculator {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  * {
    margin: 10px;
  }
  input {
    width: 250px;
  }
}
.result-container {
  * {
    margin: 10px;
  }
}

.error {
  color: red;
}

.warning {
  color: rgb(255, 145, 0);
}
</style>
