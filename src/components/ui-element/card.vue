<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      //title: "Hello elite",
    };
  },

  props: {
    cardImage: String,
    cardTitle: String,
    cardDescription: String,
    cardRoute: String,
  },
};
</script>

<template>
  <div class="card">
    <img src="../../../public/images/Jumbotron-Images-2.jpg" alt="" />
    <div class="card-contents">
      <div class="card-text">
        <h3>titolo</h3>
        <span>breve descrizione</span>
      </div>
      <button class="btn">></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100% / 3;
  margin: 30px 15px;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px -1px rgb(0, 0, 0, 0.3);
  transition: transform 0.2s; /* Animation */
  z-index: 2;
  &:hover {
    transform: scale(1.02);
    .card-contents {
      .btn {
        display: block;
      }
    }
  }
  img {
    margin-bottom: 20px;
  }
  .card-contents {
    display: flex;
    justify-content: space-between;
    font-family: "Rubik", sans-serif;
    .card-text {
      h3 {
        font-size: 30px;
        font-weight: 100;
        font-style: italic;
        color: rgb(3, 35, 54);
        margin: 0;
      }
      span {
        font-size: 18px;
        font-style: italic;
        color: rgb(184, 184, 184);
      }
    }
    .btn {
      margin: 0 20px;
      color: rgb(184, 184, 184);
      font-size: 40px;
      padding: 0;
      display: none;

      &:hover {
        color: gray;
      }
    }
  }
}
</style>
