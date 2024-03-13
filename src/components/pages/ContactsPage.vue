<script>
// import introPage from "../ui-element/introPage.vue";

export default {
  data() {
    return {
      contacts: {
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
            <h1>{{ contacts.title }}</h1>
            <h3>{{ contacts.description }} {{ contacts.subtitle }}</h3>
            <div class="icons-cont">
              <a href=""><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
              <a href=""><font-awesome-icon icon="fa-brands fa-github" /></a>
              <a href=""><font-awesome-icon icon="fa-solid fa-envelope" /></a>
            </div>
            <div class="download-cont">
              <a href="" download="">Scarica il mio CV</a>
              <a href="" download="">Scarica il mio Portfolio</a>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 image-cont">
            <img
              class="circular-image"
              src="../../../public/images/contacts-profile.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts-container {
  font-family: "Rubik", sans-serif;
  color: rgb(3, 35, 54);
  margin: 20px 40px;
  .container-fluid {
    padding: 30px;
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      .col-sm-12 {
        h1 {
          font-size: 80px;
        }
        h3 {
          font-size: 30px;
          font-weight: 400;
          margin: 20px 0 20px 0;
          font-style: italic;
        }
      }
    }
  }
}

.circular-image {
  width: 80%;
  box-shadow: 0px 0px 6px 2px rgba(166, 166, 166, 0.5);
  border-radius: 50%;
  margin: 10px 0 10px 0;
  object-fit: cover;
}
</style>
