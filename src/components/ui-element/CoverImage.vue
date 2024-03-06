<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      topLayerWidth: 0,
      containerWidth: 0,
    };
  },

  // components: {
  //   MyComponent,
  // },

  mounted() {
    this.containerWidth = this.$el.offsetWidth; // Ottieni la larghezza del contenitore
  },

  methods: {
    splitScreen(e) {
      let x;
      if (e.type === "touchmove") {
        const touch = e.touches[0];
        x = touch.clientX;
      } else {
        x = e.clientX;
      }
      // Inverti la direzione dell'asse X
      this.topLayerWidth = this.containerWidth - x;
    },
  },
};
</script>

<template>
  <section
    class="split-screen"
    @mousemove="splitScreen"
    @touchmove="splitScreen"
  >
    <!-- Layer Right -->
    <div class="layer right">
      <div class="content-wrap">
        <div class="dev-content-right">
          <h2>&lt;coder&gt;</h2>
          <p>Jr. Full-Stack Web Dev con preferenze in Front-End 👨🏻‍💻</p>
        </div>
        <div class="dev-content-left">
          <img src="../../../public/images/superDev.png" alt="" />
          <p class="coder-description">
            Scrivo codice in modo metodico, pulito e organizzato, ottimizzando
            con l'esperienza.
          </p>
        </div>
        <img
          class="main-img"
          src="../../../public/images/Jumbotron-Images.jpg"
          alt="forest"
        />
      </div>
    </div>
    <!-- Layer Left -->
    <div class="layer left" :style="{ width: topLayerWidth + 'px' }">
      <div class="content-wrap">
        <div class="design-content-left">
          <h2>.designer</h2>
          <p>Product Designer in Graphic & UI/UX Design</p>
        </div>
        <div class="design-content-right">
          <img src="../../../public/images/designer.png" alt="" />
          <p class="des-description">
            Realizzo prodotti con metodo, partendo dalle bozze su carta alla
            digitalizzazione su computer.
          </p>
        </div>
        <img
          class="main-img"
          src="../../../public/images/Jumbotron-Images-2.jpg"
          alt="city"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: "Rubik", sans-serif;
}

.split-screen,
.layer,
.content-wrap {
  width: 100vw;
  height: 100vh;
  min-height: 30em;
}

.split-screen {
  position: relative;
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px rgba(0, 0, 0, 0.45);
}

.layer {
  position: absolute;
  overflow: hidden;
}

.content-wrap {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*padding: 2.5rem;*/
}

.layer .main-img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
}

.layer::before {
  content: "";
  /*background-color: rgba(0, 0, 0, 0.5);*/
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.right {
  z-index: 1;
}

.left {
  z-index: 2;
  width: 50vw;
  border-right: 0px #fff539 solid;
}

.layer h2 {
  max-width: 9em;
  font-size: 70px;
  margin: 0px 0px 10px 0px;
  padding: 0;
}

.layer .dev-content-right,
.dev-content-left,
.design-content-left,
.design-content-right {
  z-index: 1;
  position: absolute;
  top: 25%;
  color: rgb(3, 35, 54);
  max-width: 400px;
  text-align: center;
}

/* Dev Content */
.dev-content-left {
  top: 10%;
  left: 8%;
  width: 300px;
}

.dev-content-right {
  right: 10%;
  width: 300px;
}

.dev-content-left img,
.design-content-right img {
  width: 100%;
}

.design-content-right {
  top: 10%;
  right: 8%;
  margin-left: 10%;
  width: 300px;
}

.design-content-left {
  left: 5%;
}

.content-wrap p {
  margin-top: 10px;
  font-style: italic;
  font-weight: bold;
}

/*
  color: rgb(3, 35, 54);
  color: rgb(255, 162, 0);
  032336
  #white
  #ffa200 
*/

@media screen and (min-width: 769px) and (max-width: 992px) {
  .layer h2 {
    max-width: 9em;
    font-size: 50px;
    margin: 0px 0px 10px 0px;
    padding: 0;
  }
  .content-wrap p {
    margin-top: 10px;
    font-style: italic;
    font-weight: bold;
    font-size: 10px;
  }
  .dev-content-left img,
  .design-content-right img {
    width: 70%;
  }
  .dev-content-right {
    position: absolute;
    top: 5%;
    right: 0px;
    margin-left: 10%;
    width: 300px;
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  .dev-content-left p,
  .dev-content-right p,
  .design-content-right p,
  .design-content-left p {
    display: none;
  }

  .dev-content-right h2 {
    font-size: 50px;
    position: absolute;
    right: -15%;
    rotate: 90deg;
  }
  .design-content-left h2 {
    font-size: 50px;
    rotate: 270deg;
    position: absolute;
    left: -50px;
  }
  .dev-content-left img,
  .design-content-right img {
    width: 50%;
  }
  .dev-content-left img {
    position: absolute;
    left: 10%;
    top: 100px;
  }
  .design-content-right img {
    position: absolute;
    right: 10%;
    top: 100px;
  }
}

@media screen and (max-width: 576px) {
  .dev-content-right h2 {
    font-size: 30px;
    position: absolute;
    right: -15%;
    rotate: 90deg;
  }
  .design-content-left h2 {
    font-size: 30px;
    rotate: 270deg;
    position: absolute;
    left: -50px;
  }
  .dev-content-left,
  .dev-content-right p,
  .design-content-right,
  .design-content-left p {
    display: none;
  }
}
</style>
