<script>
// import MyComponent from "./components/MyComponent.vue";
import navBar from "./components/micro-component/navBar.vue";
export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    navBar,
  },
};
</script>

<template>
  <navBar></navBar>
  <!--  <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'blog' }">
              Blog
            </router-link> -->
  <!-- <router-view></router-view> -->
</template>

<style lang="scss">
/* @use "./styles/general.scss" as *; */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
