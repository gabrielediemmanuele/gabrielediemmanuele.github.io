<script>
// import MyComponent from "./components/MyComponent.vue";
import navBar from "./components/micro-component/navBar.vue";
import footerBar from "./components/micro-component/footerBar.vue";

export default {
  data() {
    return {};
  },

  components: {
    navBar,
    footerBar,
  },
};
</script>

<template>
  <navBar></navBar>
  <router-view></router-view>
  <footerBar></footerBar>
</template>

<style lang="scss">
/* @use "./styles/general.scss" as *; */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Rubik", sans-serif;
}
</style>
