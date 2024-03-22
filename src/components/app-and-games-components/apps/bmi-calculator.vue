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
  <div class="general-container">
    <div class="container-fluid">
      <!--* CONTENT PRIMA DEL CHECK -->
      <div class="bmi-calculator-form" v-if="!showResult">
        <div class="row">
          <div class="inputs-cont col-sm-12 col-md-6 col-lg-6">
            <h1>BMI</h1>
            <span>Body Mass Index</span>
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
              Il peso deve essere compreso tra {{ minWeight }} kg e
              {{ maxWeight }} kg
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
            <p v-if="showWarning" class="warning">
              Inserisci i dati correttamente
            </p>
          </div>
          <div class="coach-container col-sm-12 col-md-6 col-lg-6">
            <img src="/images/coach.png" alt="Woman and Man Sportive Coach" />
            <h3>About BMI-Calculator</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              voluptatibus nihil deleniti ipsam quos iure perspiciatis maxime
              magnam, aut sit dolorem minima odit iste consequuntur. Officia
              aliquam dolorum suscipit sunt.
            </p>
          </div>
        </div>
      </div>
      <!--! CONTENT DOPO IL CHECK -->
      <div class="result-container" v-else>
        <img :src="resultImage" alt="BMI Image" />
        <p>{{ bmiMessage }}</p>
        <p>Il tuo indice di massa corporea (BMI) è: {{ bmiValue }}</p>
        <button @click="reset">Calcola di nuovo</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.general-container {
  margin: 0;
  padding: 50px 0px;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-image: url("/images/BMI-Background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.container-fluid {
  width: 80%;
  border-radius: 20px;
  background-color: rgb(0, 0, 0, 0.8);
  border: 1.5px solid rgb(0, 153, 255);
  padding: 20px;
}

.bmi-calculator-form {
  .row {
    .inputs-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        font-size: 60px;
        margin: 0;
        color: rgb(0, 153, 255);
      }
      span {
        font-size: 20px;
      }
    }
  }
  input {
    width: 250px;
  }
}

.coach-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: justify;
  img {
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
