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
        introImagePath: "/assets/contacts-profile.png",
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
              <a href="https://www.linkedin.com/in/gabriele-di-emmanuele/"
                ><font-awesome-icon icon="fa-brands fa-linkedin"
              /></a>
              <a href="https://github.com/gabrielediemmanuele"
                ><font-awesome-icon icon="fa-brands fa-github"
              /></a>
              <a href="mailto:gabriele.diemmanuele@outlook.it"
                ><font-awesome-icon icon="fa-solid fa-envelope"
              /></a>
            </div>
            <div class="download-cont">
              <button class="button btn-left">
                <a
                  href="/images/cv-2024-gabriele-di-emmanuele.pdf"
                  download="cv-2024-gabriele-di-emmanuele"
                  >Scarica il mio CV
                  <font-awesome-icon
                    class="fa-solid"
                    icon="fa-solid fa-download"
                /></a>
              </button>
              <button class="button btn-right">
                <a
                  href="/images/graphic-design-portfolio-2024-gabriele-di-emmanuele.pdf"
                  download="portfolio-2024-gabriele-di-emmanuele"
                  >Graphic Design Portfolio
                  <font-awesome-icon
                    class="fa-solid"
                    icon="fa-solid fa-download"
                /></a>
              </button>
            </div>
          </div>
          <div class="col-sm-12 col-md-6 circle-cont">
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
.circle-cont {
  display: flex;
  justify-content: center;
  align-items: center;
}
.contacts-container {
  background-color: rgb(3, 35, 54);
  font-family: "Rubik", sans-serif;
  color: rgb(3, 35, 54);
  padding: 20px 40px;
  .container-fluid {
    padding: 30px;
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      .col-sm-12 {
        h1 {
          font-size: 80px;
          color: orange;
        }
        h3 {
          font-size: 30px;
          font-weight: 400;
          margin: 20px 0 20px 0;
          font-style: italic;
          color: rgb(79, 149, 189);
        }
        /* icons */
        .icons-cont {
          margin-bottom: 20px;
          .fa-linkedin,
          .fa-github,
          .fa-envelope {
            font-size: 45px;
            color: white;
            &:hover {
              color: orange;
              cursor: pointer;
            }
          }
          .fa-github {
            margin: 0 20px;
          }
        }

        .download-cont {
          .button {
            border: 1.5px solid orange;
            margin-bottom: 20px;
            padding: 8px 25px;
            font-size: 15px;
            color: orange;
            transition: linear 5ms;
            background-color: transparent;
            border-radius: 12px;
            &:hover {
              color: white;
              border: 1.5px solid rgb(255, 255, 255);
              a {
                color: rgb(255, 255, 255);
              }
            }
            a {
              color: orange;
              text-decoration: none;
              .fa-solid {
                margin-left: 2px;
              }
            }
          }
          .btn-left {
            margin-right: 20px;
          }
        }
        .circular-image {
          width: 80%;
          border-radius: 50%;
          margin-top: 25px;
          object-fit: cover;
        }
      }
    }
  }
}

@media screen and (max-width: 567px) {
  .container-fluid {
    .row {
      .col-sm-12 {
        h1 {
          font-size: 60px !important;
        }
      }
    }
  }
}
</style>
