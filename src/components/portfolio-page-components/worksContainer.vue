<script>
import card from "../ui-element/card.vue";

export default {
  data() {
    return {
      projects: [
        {
          projectImage:
            "../../../public/images/Front-End-Begin/cover-frontend-project.png",
          projectTitle: "Front-End-Begin",
          projectDescription: "Basi HTML, CSS, Bootstrap",
          projectRoute: "frontEndBegin",
        },
        {
          projectImage:
            "../../../public/images/Front-End-Advanced/cover-projects-front-advanced.png",
          projectTitle: "Front-End-Advaced",
          projectDescription: "HTML, CSS, JS, Vue + Vite, API",
          projectRoute: "frontEndAdvanced",
        },
        {
          projectImage:
            "../../../public/images/Front-End-Advanced/cover-projects-anidio.png",
          projectTitle: "Anidio",
          projectDescription: "HTML, CSS, JS, VUE + VITE",
          projectRoute: "anidio",
        },
        {
          projectImage:
            "../../../public/images/Deliveboo/cover-project-deliveboo.png",
          projectTitle: "DeliveBoo",
          projectDescription: "Front-End - Back-End",
          projectRoute: "deliveboo",
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
  color: rgb(3, 35, 54);
  padding-top: 20px;
  //box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4);
  .port .row {
    display: flex;
    flex-direction: row;
  }
}
</style>
