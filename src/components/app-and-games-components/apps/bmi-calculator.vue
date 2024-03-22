<script>
export default {
  data() {
    return {
      weight: null,
      height: null,
      showResult: false,
      showWarning: false,
      maxWeight: 200,
      minWeight: 1,
      maxHeight: 2.5,
      minHeight: 0.1,
    };
  },
  //image, message and value
  computed: {
    resultImage() {
      const bmi = this.calculateBMIValue();
      if (bmi < 18.5) {
        return "/images/underweight.png";
      } else if (bmi >= 18.5 && bmi < 25) {
        return "/images/healty.png";
      } else {
        return "/images/overweight.png";
      }
    },
    bmiMessage() {
      const bmi = this.calculateBMIValue();
      if (bmi < 18.5) {
        return "Serve più massa! Forza! 💪🏻";
      } else if (bmi >= 18.5 && bmi < 25) {
        return "Il tuo peso forma è perfetto! 😎\n Continua cosi!";
      } else {
        return "Dovresti perdere peso! Impegnati! 🏃🏻‍♂️🏃🏻‍♀️";
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
              placeholder="Peso (kg) ex: 60.5"
              :max="maxWeight"
              :min="minWeight"
              required
            />
            <p
              v-if="weight && (weight < minWeight || weight > maxWeight)"
              class="error"
            >
              *Il peso deve essere compreso tra {{ minWeight }} kg e
              {{ maxWeight }} kg
            </p>
            <input
              v-model.number="height"
              type="number"
              placeholder="Altezza (metri) ex: 1.20 "
              :max="maxHeight"
              :min="minHeight"
              required
            />
            <p
              v-if="height && (height < minHeight || height > maxHeight)"
              class="error"
            >
              *L'altezza deve essere compresa tra {{ minHeight }} metri e
              {{ maxHeight }} metri
            </p>
            <p v-if="showWarning" class="warning">
              *Inserisci i dati correttamente: max 1 - 200kg / 0.1 - 2.5m
            </p>
            <button @click="calculateBMI">Calcola BMI</button>
          </div>
          <div class="coach-container col-sm-12 col-md-6 col-lg-6">
            <img src="/images/coach.png" alt="Woman and Man Sportive Coach" />
            <h3>About BMI-Calculator</h3>
            <p>
              L'indice di massa corporea (abbreviato IMC o BMI, dall'inglese
              body mass index) è un dato biometrico, espresso come rapporto tra
              peso e quadrato dell'altezza di un individuo ed è utilizzato come
              un indicatore dello stato di peso forma. Tuttavia, è un dato
              relativo in quanto non tiene conto della massa magra o grassa
              dell'individuo. Per questo ci si deve rivolgere a dei
              professionisti.
            </p>
          </div>
        </div>
      </div>
      <!--! CONTENT DOPO IL CHECK -->
      <div class="result-container" v-else>
        <div class="row">
          <div class="text-cont col-sm-12 col-md-6 col-lg-6">
            <p class="bmi-message">{{ bmiMessage }}</p>
            <p class="result">
              Il tuo indice di massa corporea (BMI) è: <br /><span>{{
                bmiValue
              }}</span>
            </p>
            <button @click="reset">Calcola di nuovo</button>
          </div>
          <div class="result-image col-sm-12 col-md-6 col-lg-6">
            <img :src="resultImage" alt="BMI Image" />
          </div>
        </div>
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
  margin-bottom: 25px; // serve per evitare il bordo bianco..
}

.bmi-calculator-form {
  .row {
    .inputs-cont {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 10px;

      h1 {
        font-size: 60px;
        margin: 0;
        color: rgb(0, 153, 255);
      }
      span {
        font-size: 20px;
        color: white;
        font-style: oblique;
      }
      input {
        width: 80%;
        margin: 20px 0px;
        &:focus {
          border: 5px solid rgb(0, 153, 255) !important;
        }
      }

      button {
        border: 1.5px solid rgb(0, 153, 255);
        background-color: transparent;
        color: rgb(0, 153, 255);
        padding: 10px 20px;
        border-radius: 30px;
        cursor: pointer;
        margin-bottom: 25px;

        &:hover {
          border-color: rgb(108, 223, 255);
          color: rgb(108, 223, 255);
        }
      }
    }
  }
  text-align: center;
  .error {
    color: red;
    font-style: oblique;
  }

  .warning {
    color: rgb(255, 145, 0);
    font-style: oblique;
  }
}

.coach-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: justify;
  padding: 0 30px;
  img {
    width: 250px;
    margin-bottom: 10px;
  }
}

.result-container {
  .row {
    justify-content: space-around;
    .text-cont {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .bmi-message {
        color: rgb(0, 153, 255);
        font-size: 30px;
      }
      p {
        color: white;
        font-size: 18px;

        span {
          font-size: 45px;
          color: orange;
        }
      }
      button {
        border: 1.5px solid rgb(0, 153, 255);
        background-color: transparent;
        color: rgb(0, 153, 255);
        padding: 10px 20px;
        border-radius: 30px;
        cursor: pointer;
        margin-bottom: 25px;

        &:hover {
          border-color: rgb(108, 223, 255);
          color: rgb(108, 223, 255);
        }
      }
    }
    .result-image {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 250px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
