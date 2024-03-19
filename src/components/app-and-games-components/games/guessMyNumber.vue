<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      guess: null,
      secretNumber: Math.floor(Math.random() * 20) + 1,
      score: 20,
      highscore: 0,
      playing: true,
    };
  },

  computed: {
    guessedNumber() {
      return this.playing ? "?" : this.secretNumber;
    },
  },

  methods: {
    checkGuess() {
      const guess = Number(this.guess);
      if (this.playing) {
        if (!guess) {
          this.showMessage("⛔ No Number");
        } else if (guess > 20) {
          this.showMessage("⛔ Only numbers between 1 and 20 !");
        } else if (guess === this.secretNumber) {
          this.playing = false;
          this.showMessage("🎉 Correct Number, click Again Button");
          this.playSound();
          this.setStyles();
          this.highscore = Math.max(this.highscore, this.score);
        } else if (guess !== this.secretNumber) {
          if (this.score > 1) {
            this.showMessage(
              guess > this.secretNumber ? "Too High !" : "Too Low !"
            );
            this.score--;
          } else {
            this.playing = false;
            this.$refs.guessedNumber.style.color = "red";
            this.$refs.title.style.color = "red";
            this.$refs.message.style.color = "red";
            this.playSound();
            this.showMessage("You lose, try again! Click on Reset!");
            this.score = 0;
          }
        }
      }
    },

    resetGame() {
      this.softReset();
      alert("You have reset the game, your highscore starts again from 0 !");
      alert("Good luck ! 😁");
      this.highscore = 0;
    },
    softReset() {
      this.playing = true;
      this.score = 20;
      this.secretNumber = Math.floor(Math.random() * 20) + 1;
      this.showMessage("Start Guessing...");
      this.guess = null;
      this.setStyles("reset");
    },

    showMessage(message) {
      this.$refs.message.textContent = message;
    },

    setStyles(type) {
      if (type === "reset") {
        this.$refs.guessedNumber.style.color = "white";
        this.$refs.title.style.color = "white";
        this.$refs.message.style.color = "white";
      } else {
        this.$refs.guessedNumber.style.color = "limegreen";
        this.$refs.title.style.color = "limegreen";
        this.$refs.message.style.color = "limegreen";
      }
    },
    playSound() {
      if (this.guess === this.secretNumber) {
        this.$refs.rightAnswer.play();
      } else {
        this.$refs.lose.play();
      }
    },
  },
};
</script>

<template>
  <div class="main-container">
    <header>
      <div class="container-fluid header">
        <div class="btn-cont">
          <button class="btn again" @click="softReset">Play Again</button>
          <button class="btn reset" @click="resetGame">Reset</button>
        </div>
        <p class="between">(Between 1 and 20)</p>
      </div>
    </header>
    <main>
      <div class="container-fluid center">
        <h1 ref="title">Guess My Number!</h1>
        <div class="number" ref="guessedNumber">{{ guessedNumber }}</div>
      </div>
      <div class="container-fluid left-right">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <section class="left">
              <input type="number" class="guess" v-model="guess" />
              <button class="btn check" @click="checkGuess">
                Check Number
              </button>
            </section>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <section class="right">
              <p ref="message" class="message">Start guessing...</p>
              <p class="label-score">
                💯 Score: <span class="score">{{ score }}</span>
              </p>
              <p class="label-highscore">
                🥇 Highscore: <span class="highscore">{{ highscore }}</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
    <audio ref="rightAnswer" src="/images/rightanswer.mp3"></audio>
    <audio ref="lose" src="/images/lose.mp3"></audio>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Press Start 2P", system-ui;
}

.main-container {
  color: #eee;
  background-color: #212121;
}

/* LAYOUT */
header {
  padding: 15px 30px;
  .container-fluid.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .between {
      font-size: 18px;
      color: orange;
      &:hover {
        color: white;
      }
    }
  }
}

main {
  .container-fluid.center {
    display: flex;
    flex-direction: column;
    align-items: center;

    .number {
      //border: 2px solid white;
      // border-radius: 15px;
      padding: 25px 50px;
      margin-top: 35px;
      font-size: 50px;
      text-align: center;
    }
  }
  .container-fluid.left-right {
    .row {
      justify-content: space-between;
      .left,
      .right {
        display: flex;
        flex-direction: column;
        margin: 30px auto;
        //border: 1px dashed greenyellow;
      }
      /*left*/
      .left {
        align-items: center;
        padding: 0px 130px;
        .guess {
          background: none;
          border: 4px solid white;
          display: block;
          margin-bottom: 20px;
          border-radius: 20px;
          width: 220px;
          padding: 10px;

          font-family: inherit;
          color: rgb(255, 255, 255);
          font-size: 50px;
          text-align: center;
          &:hover {
            border: 4px solid orange;
          }
        }
      }
      /* right  */
      .right {
        padding: 20px 130px;
        p {
          font-size: 20px;
        }
        .label-score,
        .label-highscore {
          margin: 15px 0px;
        }
      }
    }
  }
}
/* .btn {
  background-color: white;
  padding: 10px 20px;
  margin: 10px;
} */

/*Button Custom*/
.btn {
  --border-radius: 15px;
  --border-width: 4px;
  appearance: none;
  position: relative;
  padding: 15px 30px;
  margin: 10px;
  border: 0;
  background-color: #212121;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  z-index: 2;
  &:hover {
    color: orange;
  }
}

.btn::after {
  --m-i: linear-gradient(#000, #000);
  --m-o: content-box, padding-box;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  border-radius: 15px;
  background-image: conic-gradient(
    #488cfb,
    #299adb,
    #bb74e1,
    #970eff,
    #e440bb,
    #655adc,
    #488cfb
  );
  -webkit-mask-image: var(--m-i), var(--m-i);
  mask-image: var(--m-i), var(--m-i);
  -webkit-mask-origin: var(--m-o);
  mask-origin: var(--m-o);
  -webkit-mask-clip: var(--m-o);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
  filter: hue-rotate(0);
  animation: rotate-hue linear 2s infinite;
  animation-play-state: running;
}

.btn:hover::after {
  animation-play-state: paused;
}

@keyframes rotate-hue {
  to {
    filter: hue-rotate(1turn);
  }
}

.btn,
.btn::after {
  box-sizing: border-box;
}

.btn:active {
  --border-width: 5px;
}

//Bordo numero
@keyframes rainbow {
  0% {
    border-color: #488cfb;
  }
  20% {
    border-color: #299adb;
  }
  40% {
    border-color: #bb74e1;
  }
  60% {
    border-color: #970eff;
  }
  80% {
    border-color: #e440bb;
  }
  100% {
    border-color: #488cfb;
  }
}
.number {
  border-width: 3px;
  border-style: solid;
  border-radius: 10px;
  animation: rainbow 5s infinite alternate;
}

//media query
@media screen and (max-width: 766px) {
  .btn-cont {
    display: flex;
    flex-direction: column !important;
  }
}

@media screen and (min-width: 767px) and (max-width: 991px) {
  .btn-cont {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 992px) {
  .container-fluid.header {
    flex-direction: column;
    .btn-cont {
      flex-direction: row;
    }
    .between {
      margin: 20px 0px;
    }
  }
  .left {
    padding: 0px 60px !important;
  }
  .right {
    text-align: center;
    padding: 20px 60px !important;
  }
  .container-fluid.center {
    text-align: center;
  }
}

@media screen and (min-width: 993px) and (max-width: 1200px) {
}
@media screen and (min-width: 1201px) {
}
</style>
