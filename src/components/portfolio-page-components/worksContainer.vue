<script>
import card from "../ui-element/card.vue";

export default {
  data() {
    return {
      projects: [
        {
          projectImage: "/images/cover-frontend-project.png",
          projectTitle: "Front-End-Begin",
          projectDescription: "Basi HTML, CSS, Bootstrap",
          projectRoute: "frontEndBegin",
        },
        {
          projectImage: "/images/cover-projects-front-advanced.png",
          projectTitle: "Front-End-Advaced",
          projectDescription: "HTML, CSS, Js, Vue + Vite, API",
          projectRoute: "frontEndAdvanced",
        },
        {
          projectImage: "/images/cover-projects-anidio.png",
          projectTitle: "Anidio",
          projectDescription: "HTML, CSS, Js, Vue + Vite",
          projectRoute: "anidio",
        },
        {
          projectImage: "/images/cover-project-deliveboo.png",
          projectTitle: "DeliveBoo",
          projectDescription: "Front-End (Vue), Back-End (Laravel)",
          projectRoute: "deliveboo",
        },
        {
          projectImage: "/images/bankist-v1-js.png",
          projectTitle: "Bankist-V1-Js",
          projectDescription: "Java Script [Array Methods]",
          projectRoute: "bankistV1Js",
        },
        {
          projectImage: "/images/mapty-js-cover.png",
          projectTitle: "Mapty Js - Workout",
          projectDescription: "Java Script - OOP - Geolocal. LEAFLET Library",
          projectRoute: "maptyJs",
        },
        {
          projectImage: "/images/forkify_cover_img.png",
          projectTitle: "Forkify // 100,000 + recipes",
          projectDescription: "Java Script, OOP, API, AJAX, localStorage",
          projectRoute: "forkify",
        },
      ],
    };
  },

  components: {
    card,
  },
};
</script>

<template>
  <!-- My portfolio works -->
  <section class="myWorks">
    <div class="container-fluid portfolio-cont">
      <h1 class="portfolio-title text-center">Web. Dev. Projects</h1>
      <p class="text-center">
        Nota Bene: tutte le immagini, loghi, riferimenti, fonts, sono solo a
        scopo di studio e non commerciale! <br />
        Altri lavori verrano caricati in futuro!
      </p>
      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-12"
          v-for="(project, index) in projects"
          :key="index"
        >
          <card
            :cardImage="project.projectImage"
            :cardTitle="project.projectTitle"
            :cardDescription="project.projectDescription"
            :cardRoute="project.projectRoute"
          ></card>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-cont {
  background-color: rgb(3, 35, 54);
  color: white;
  padding: 50px;

  //box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4);
  h1 {
    color: rgb(79, 149, 189);
  }
  p {
    font-style: italic;
  }
  .row {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid lightgray;
    padding-bottom: 20px;
  }
}
</style>
