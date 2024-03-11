<script>
import card from "../ui-element/card.vue";

export default {
  data() {
    return {
      projects: [
        {
          projectImage: "",
          projectTitle: "",
          projectType: "",
          projectRoute: "",
        },
        {
          projectImage: "",
          projectTitle: "",
          projectType: "",
          projectRoute: "",
        },
        {
          projectImage: "",
          projectTitle: "",
          projectType: "",
          projectRoute: "",
        },
        {
          projectImage: "",
          projectTitle: "",
          projectType: "",
          projectRoute: "",
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
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <card></card>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-cont {
  padding-top: 20px;
  //box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, 0.4);
  .row {
    display: flex;
    flex-direction: row;
  }
}
</style>
