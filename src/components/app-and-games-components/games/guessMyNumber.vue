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
  background-color: rgb(57, 68, 117);
}

/* LAYOUT */
header {
  padding: 20px 30px;
  height: 20vh;
  .container-fluid.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btn-cont {
      .btn {
        background-color: white;
        padding: 10px 20px;
      }
      .btn {
        margin: 10px;
      }
    }
  }
}

main {
  height: 80vh;
  .container-fluid.center {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .number {
      border: 2px solid white;
      border-radius: 15px;
      padding: 50px;
      margin-top: 35px;
    }
  }
  .container-fluid.left-right {
    .row {
      justify-content: space-between;
      .left,
      .right {
        display: flex;
        flex-direction: column;
      }
    }
    .left,
    .right {
      border: 1px dashed greenyellow;
    }
  }
}
</style>
