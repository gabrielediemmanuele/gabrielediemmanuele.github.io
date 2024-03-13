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
  <div class="container-fluid p-3">
    <!-- gd = graphic design -->
    <div class="gd-text-cont text-center">
      <h1>Graphic Design Carousel</h1>
      <p>
        Di seguito, un carosello per mostrare alcuni dei miei prodotti di
        Graphic Design, molti dei quali sono prodotti entrati in commercio!
        <br />
        Non tutti i miei lavori sono presenti in slider, per maggiori
        informazioni, trovate il mio CV e portfolio nella sezione Contatti.
      </p>
    </div>
    <!-- Carousel Bootstrap-->
    <div class="carousel-cont">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="10"
            aria-label="Slide 11"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="11"
            aria-label="Slide 12"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../../public/images/graphic-design/3d.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/chainbrush.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/double-exposure.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/deep-forest-book.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/bonny-herbs.png"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/flux-sketch.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/flux-wallpaper.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/flux-mokups.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/postcard.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/supersmoothies1.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/supersmoothies2.jpg"
              class="d-block"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gd-text-cont {
  p {
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
  }
  margin-bottom: 30px;
}
.carousel-cont {
  width: 60%;
  margin-bottom: 50px;
  box-shadow: 0px 0px 6px 1px rgb(0, 0, 0, 0.5);
  border-radius: 30px;
}
.carousel-inner {
  border-radius: 30px;
  .carousel-item {
    border-radius: 30px;
    img {
      width: 100% !important;
      height: 100% !important;
      object-fit: cover !important;
      border-radius: 30px;
    }
  }
}
</style>
