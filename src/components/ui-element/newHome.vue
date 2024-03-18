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
      <h1 class="personal-name">Gabriele Di Emmanuele</h1>
      <h1 class="competences">Coder and Web Designer</h1>
      <p>
        Sono un !JR<span>Full-Stack Web Developer</span> con competenze in
        <span>Graphic - UI/UX Design</span>. <br />
        Al momento, sono concentrato nel migliorare le mie competenze sul
        Front-End Development.
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
  width: 100vw;
  height: 100vh;
  color: white;

  display: flex;
  justify-content: center;

  .text-cont {
    margin: 50px auto;

    h6,
    h1,
    p {
      margin: 30px 0;
    }

    h6 {
      color: orange;
      font-weight: 100;
      font-style: italic;
    }

    .competences {
      color: rgb(79, 149, 189);
    }
  }
}
</style>
