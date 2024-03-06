<script>
import introPage from "../ui-element/introPage.vue";

export default {
  data() {
    return {
      about: {
        title: ".about",
        subtitle:
          "Nato come artista, Graphic Designer per caso, Web-Dev per scelta.",
        description:
          "Fin da bambino, ho sempre avuto una passione e predisposizione per la creatività. \
           Ho inziato disegnando i personaggi di videogames e film, crescendo mi sono cimentato \
           nel Graphic Design in autonomia e infine, ho unito entrambi i mondi sul codice, \
           specializzandomi come !Jr Full-Stack Web-Develoer con una predisposizione per il Front-End.\
           Oltre il codig, mi piace fare tanto altro! Scoprilo qui sotto!",
        introImagePath: "../../../public/images/aboutpage.png",
      },
      aboutCardImages: [
        {
          imagePath: "../../../public/images/marmore.jpg",
        },
        {
          imagePath: "../../../public/images/meandlove.jpg",
        },
        {
          imagePath: "../../../public/images/tumpi.jpg",
        },
        {
          imagePath: "../../../public/images/ghost-rider-paint.jpg",
        },
        {
          imagePath: "../../../public/images/cooking.jpg",
        },
        {
          imagePath: "../../../public/images/working.jpg",
        },
      ],
    };
  },
  mounted() {
    console.log(this.aboutCardImages);
  },
  components: {
    introPage,
  },
};
</script>

<template>
  <!-- Intro-Page-About -->
  <introPage
    :title="about.title"
    :subtitle="about.subtitle"
    :description="about.description"
    :imgPath="about.introImagePath"
  >
  </introPage>
  <!--Image Gallery-->
  <section>
    <div class="container-fluid">
      <div class="row">
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
  margin: 20px 0px 20px 0px;
  box-sizing: border-box;
}
.row {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 45px 0px 45px;
  margin: 0 auto;
}
.image-card {
  box-shadow: 0px 0px 10px -4px rgb(81, 81, 81);
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  width: 170px;
  height: 110px;

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
</style>
