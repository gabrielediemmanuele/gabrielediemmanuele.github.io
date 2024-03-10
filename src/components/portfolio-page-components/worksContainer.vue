<script>
import card from "../ui-element/card.vue";

export default {
  data() {
    return {
      title: "Hello world",
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
        <div class="col-sm-12 col-md-6 col-lg-4">
          <card></card>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio-cont {
  padding-top: 20px;
  box-shadow: inset 0px 0px 5px 2px rgb(0, 0, 0, 0.5);
}
</style>
