<script>
export default {
  data() {
    return {};
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
  <router-link :to="cardRoute" class="router-card">
    <div class="card">
      <img :src="cardImage" alt="" />
      <div class="card-contents">
        <div class="card-text">
          <h3>{{ cardTitle }}</h3>
          <span>{{ cardDescription }}</span>
        </div>
        <!--   <router-link :to="cardRoute" class="router-card"
          ><button class="btn">></button></router-link
        > -->
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.router-card {
  text-decoration: none;
}
.card {
  margin: 30px 15px;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px -1px rgb(0, 0, 0, 0.3);
  transition: transform 0.2s; /* Animation */
  z-index: 2;
  &:hover {
    box-shadow: 0px 0px 1px 8px orange;
    transform: scale(1.02);
    .card-contents {
      .router-card {
        text-decoration: none;
        .btn {
          display: block;
        }
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
