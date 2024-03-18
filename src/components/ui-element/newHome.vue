<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="container-fluid">
    <div class="text-cont">
      <h6>Ciao, mi chiamo</h6>
      <h1 class="personal-name">Gabriele Di Emmanuele.</h1>
      <h1 class="competences">Disegno codice per il web!</h1>
      <p>
        Sono un !JR <span>Full-Stack Web Developer</span> con competenze in
        <span>Graphic - UI/UX Design</span>. <br />
        Al momento, sono concentrato nel migliorare le mie competenze sul
        <span>Front-End Development</span>, <br />consolidando
        <span>Java Script</span> e i miei prossimi obbiettivi saranno
        <span>React</span> e <span>Angular</span>.
      </p>
      <button>
        <router-link
          class="nav-link"
          aria-current="page"
          :to="{ name: 'portfolio' }"
          >Progetti
        </router-link>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  background-color: rgb(3, 35, 54);
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;

  .text-cont {
    margin: 20px auto 50px auto;
    padding: 20px;
    z-index: 1;

    h6,
    h1,
    p {
      margin: 20px 0;
    }

    h6 {
      color: orange;
      font-weight: 100;
      font-style: italic;
    }

    h1 {
      font-size: 50px;
    }

    .competences {
      color: rgb(79, 149, 189);
    }

    p {
      font-size: 15px;
      line-height: 25px;
      font-weight: 400;
      color: rgb(141, 189, 218);
      span {
        color: orange;
      }
    }
    button {
      border: 1.5px solid orange;
      padding: 8px 25px;
      font-size: 15px;
      color: orange;
      transition: linear 5ms;
      background-color: transparent;
      border-radius: 12px;

      &:hover {
        color: white;
        border: 1.5px solid rgb(255, 255, 255);
      }
    }
  }
}
</style>
