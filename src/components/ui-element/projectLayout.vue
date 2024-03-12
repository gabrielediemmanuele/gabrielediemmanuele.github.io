<script>
export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  props: {
    objParagraph: String,
    functionsParagraph: String,
    videoPath: String,
    cards: Array,
  },
};
</script>

<template>
  <!-- objectives -->
  <section class="objectives-section">
    <div class="container-fluid objectives-cont">
      <h2 class="obj-title">Obbiettivi</h2>
      <p class="obj-paragraph">
        {{ objParagraph }}
      </p>
    </div>
  </section>
  <!-- Functions and video -->
  <section class="functions-section">
    <div class="container-fluid functions-cont">
      <div class="row">
        <div class="functionality-text col-lg-6 col-md-6 col-sm-12 col-12 p-4">
          <h3 class="functions-title">Funzionalità</h3>
          <p class="functions-paragraph">
            {{ functionsParagraph }}
          </p>
        </div>
        <div class="video-cont col-lg-6 col-md-6 col-sm-12 col-12 p-4">
          <video controls class="videoplayer">
            <source :src="videoPath" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
  <!-- Images -->
  <section class="images-section">
    <div class="container-fluid images-cont">
      <h2 class="text fs-1 text-center">Galleria</h2>
      <span>
        Nota Importante: Per visualizzare le immagini, tasto destro del mouse
        sull'immagine e cliccare su "Apri immagine in un'altra scheda"</span
      >
      <div class="row gallery-row">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="col-lg-3 col-md-4 col-sm-6 col-12"
        >
          <div class="card">
            <!--   Card with image  -->
            <img :src="card.cardImage" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ card.cardTitle }}</h5>
              <p class="card-text">
                {{ card.cardDescription }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.objectives-cont {
  background-color: rgb(237, 237, 237);
  padding: 30px 60px;
  text-align: left;
  color: rgb(3, 35, 54);
  margin: 30px auto;
}

.functions-cont {
  padding: 20px;
}

.videoplayer {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 1px rgba(136, 136, 136, 0.5);
}

.images-cont {
  background-color: rgb(57, 68, 117);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  h2.text {
    color: orange;
  }
  span {
    color: white;
    font-style: italic;
    font-weight: 200;
  }

  .gallery-row {
    padding: 30px;
    .col-lg-3 {
    }
  }
}
.card {
  width: 250px;
  margin: 20px 0;
  box-shadow: 0px 0px 8px -1px rgb(0, 0, 0);
  padding: 5px !important;
  .card-text {
    font-size: 13px;
    font-style: italic;
    font-weight: 500;
    color: gray;
  }
}
.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
}
</style>
