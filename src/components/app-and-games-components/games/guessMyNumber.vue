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
  <div class="main-container">
    <header>
      <div class="container-fluid header">
        <div class="btn-cont">
          <button class="btn again">Again!</button>
          <button class="btn reset">Reset</button>
        </div>
        <p class="between">(Between 1 and 20)</p>
      </div>
    </header>
    <main>
      <div class="container-fluid center">
        <h1>Guess My Number!</h1>
        <div class="number">?</div>
      </div>
      <div class="container-fluid left-right">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <section class="left">
              <input type="number" class="guess" />
              <button class="btn check">Check!</button>
            </section>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <section class="right">
              <p class="message">Start guessing...</p>
              <p class="label-score">💯 Score: <span class="score">20</span></p>
              <p class="label-highscore">
                🥇 Highscore: <span class="highscore">0</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
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
  height: 20vh;
  .container-fluid.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

main {
  height: 80vh;
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
          border: 4px solid #eee;
          display: block;
          margin-bottom: 20px;
          border-radius: 20px;
          width: 220px;
          padding: 10px;

          font-family: inherit;
          color: rgb(255, 255, 255);
          font-size: 50px;
          text-align: center;
          overflow-y: hidden;
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
</style>
