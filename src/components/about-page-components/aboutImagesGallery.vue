<script>
export default {
  data() {
    return {
      aboutCardImages: [
        {
          imagePath: "/images/marmore.jpg",
        },
        {
          imagePath: "/images/meandlove.jpg",
        },
        {
          imagePath: "/images/tumpi.jpg",
        },
        {
          imagePath: "/images/ghost-rider-paint.jpg",
        },
        {
          imagePath: "/images/cooking.jpg",
        },
        {
          imagePath: "/images/working.jpg",
        },
      ],
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <section class="images-about-me-gallery">
    <div class="container-fluid shadow">
      <div class="row images-gallery">
        <div
          class="col-lg-2 col-md-4 col-sm-2 image-card"
          v-for="(image, index) in aboutCardImages"
          :key="index"
        >
          <img :src="image.imagePath" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container-fluid {
  margin: 0px;
  box-sizing: border-box;
  background-color: rgb(3, 35, 54);
}

.container-fluid.shadow {
  box-shadow: 0px 5px 12px -10px #000000 !important;
}

.row.images-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0px 45px 20px 45px;
  margin: 0 auto;
}

.image-card {
  box-shadow: 0px 0px 10px -4px rgb(81, 81, 81);
  border-radius: 10px;
  margin: 10px;
  padding: 3px;
  width: 170px;
  height: 110px;
  background-color: orange;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}

@media screen and (max-width: 510px) {
  .row.images-gallery {
    justify-content: center;
    align-items: center;
  }
  .image-card {
    width: 220px;
    height: 160px;
  }
}
</style>
