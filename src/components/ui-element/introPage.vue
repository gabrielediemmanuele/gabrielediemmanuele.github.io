<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },
  props: {
    title: String,
    subtitle: String,
    description: String,
    imgPath: String,
    circular: Boolean,
    rectangular: Boolean,
    imageStyles: Object,
  },
  computed: {
    imageClasses() {
      return {
        "circular-image": this.circular,
        "rectangular-image": this.rectangular,
      };
    },
  },
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="text-cont">
          <h1>{{ title }}</h1>
          <h3>{{ subtitle }}</h3>
          <p>
            {{ description }}
          </p>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="image-cont">
          <img
            :src="imgPath"
            :class="imageClasses"
            :style="imageStyles"
            alt="Immagine Gabriele"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  font-family: "Rubik", sans-serif;
  padding: 20px 80px 20px 80px;
  background-color: rgb(3, 35, 54);
  color: white;
  .row {
    border-bottom: 1px solid rgb(141, 189, 218);
    padding: 30px 0;

    .text-cont {
      font-size: 20px;
      h1 {
        font-size: 80px;
        color: orange;
      }
      h3 {
        font-size: 30px;
        font-weight: 400;
        margin: 20px 0 20px 0;
        font-style: italic;
        color: rgb(141, 189, 218);
      }
      p {
        font-size: 18px;
        font-style: italic;
        color: white;
        letter-spacing: 1px;
      }
    }

    .image-cont {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .circular-image {
        width: 80%;
        box-shadow: 0px 0px 8px 1px black;
        border-radius: 50%;
        margin: 10px 0 10px 0;
        object-fit: cover;
      }
      .rectangular-image {
        width: 80%;
        margin: 10px 0 10px 0;
      }
    }
  }
}

@media screen and (max-width: 510px) {
  .text-cont {
    h1 {
      font-size: 60px !important;
    }
  }
  .image-cont {
    img {
      width: 300px;
    }
  }
}
</style>
