<script>
// import MyComponent from "./components/MyComponent.vue";
// import HeaderNav from "./components/HeaderNav.vue";
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
  <h1>{{ title }}</h1>
  <div class="antonio">
    <span>ciao</span>
  </div>
  <!--  <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'blog' }">
              Blog
            </router-link> -->
  <!-- <router-view></router-view> -->
</template>

<style lang="scss" scoped>
/* @use "./styles/general.scss" as *; */
.antonio {
  span {
    color: orange;
  }
}
</style>
