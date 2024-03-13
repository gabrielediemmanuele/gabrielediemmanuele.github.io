<script>
// import introPage from "../ui-element/introPage.vue";

export default {
  data() {
    return {
      about: {
        title: ".contacts",
        subtitle: "👨🏻‍💻👨🏻‍🎨",
        description:
          "Contattami pure tramite e-mail e Linkedin o scarica il mio CV per maggiori informazioni!",
        introImagePath: "../../../public/images/contacts-profile.png",
      },
    };
  },

  //components: {
  // introPage,
  //},
};
</script>

<template>
  <section class="contacts">
    <div class="contacts-container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h1>ciao</h1>
            <p>descrizione</p>
            <div class="icons-cont"></div>
          </div>
          <div class="col-sm-12 col-md-6">
            <img src="../../../public/images/contacts-profile.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts-container {
  margin: 20px 40px;
  .container-fluid {
    padding: 30px;
  }
}
</style>
