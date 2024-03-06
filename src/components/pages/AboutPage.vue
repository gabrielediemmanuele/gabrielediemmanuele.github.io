<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "About",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <div class="text-cont">
          <h1>Titolo</h1>
          <h3>Sottotitolo</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
            quas id officiis fugiat distinctio sequi sunt vero harum, nisi
            adipisci dolorum fugit obcaecati recusandae. Tempore repudiandae
            fugiat reiciendis unde asperiores.
          </p>
        </div>
      </div>
      <div class="col-6">
        <div class="image-cont">
          <img src="../../../public/images/designer.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  font-family: "Rubik", sans-serif;
  padding: 20px 80px 20px 80px;
  color: rgb(3, 35, 54);
  .row {
    border-bottom: 1px solid rgb(172, 172, 172);
    padding-bottom: 30px;

    .text-cont {
      font-size: 20px;
      h1 {
        font-size: 150px;
      }
      h3 {
        font-size: 40px;
        font-weight: 400;
        margin: 20px 0 20px 0;
      }
    }

    .image-cont {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      img {
        width: 400px;
      }
    }
  }
}
</style>
