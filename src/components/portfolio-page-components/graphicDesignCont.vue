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
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../../public/images/graphic-design/Anaglyph 03.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/Brush 06.jpg"
              class="d-block"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../../public/images/graphic-design/Color Range Exercise.jpg"
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
