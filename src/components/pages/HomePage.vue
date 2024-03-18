<script>
import CoverImage from "../ui-element/CoverImage.vue";
import newHome from "../ui-element/newHome.vue";
export default {
  data() {
    return {
      title: "home",
    };
  },

  components: {
    CoverImage,
    newHome,
  },
};
</script>

<template>
  <newHome></newHome>
</template>

<style lang="scss" scoped></style>
