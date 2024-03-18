<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      moreAboutMeTitle: "Altro su di me",
      moareAboutMe: [
        "Oltre al disegno, ho studiato un pò di 3D 🎨",
        "Preferisco ambienti naturali ⛺",
        "Pratico Yoga e Mindfulness 🧘🏻‍♂️",
        "pizza, Pizza, PIZZA! 🍕",
        "Ho una passione per i video-games 🎮",
        "Mi piace cucinare 👨🏼‍🍳",
        "Allenamento almeno 3 volte a settimana 🏋🏻‍♂️",
        "Tanto altro 😁",
      ],
    };
  },
};
</script>

<template>
  <section class="more-about-me">
    <!--More About Me-->
    <div class="container-fluid">
      <div class="row row-skills">
        <div
          class="col-lg-6 col-md-6 col-sm-12 col-12 order-1 order-sm-1 order-md-0 align-items-end"
        >
          <div class="more-about-image">
            <img
              src="../../../public/images/Mokujin-front-lateral-view.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="col-lg-6 col-md-6 col-sm-12 col-12 order-0 order-sm-0 order-md-1 align-items-center"
        >
          <div class="more-about-cont common">
            <h1>{{ moreAboutMeTitle }}</h1>
            <ul>
              <li v-for="(info, index) in moareAboutMe" :key="index">
                {{ info }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* Skills Container Style */
.container-fluid {
  background-color: rgb(57, 68, 117);
  color: white;
  padding-top: 20px;
  .row-skills {
    display: flex;
    align-content: center;

    .col-lg-6 {
      display: flex;
      justify-content: center;
      .common {
        margin: 30px 0px 30px 0px;

        h1 {
          color: orange;
        }
        ul {
          padding: 0;
          margin: 0;
          list-style: none;

          li {
            font-weight: 100;
            margin: 10px 0px 10px 0px;
            font-style: italic;
          }
        }
      }

      .more-about-image {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 20px 0px 20px;
        img {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
}
</style>
