<script>
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
  <!-- objectives -->
  <section class="objectives-section">
    <div class="container-fluid objectives-cont">
      <h2 class="obj-title">Obbiettivi</h2>
      <p class="obj-paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        ipsum sit mollitia quia, eum, itaque cumque consectetur provident enim
        inventore amet quo quam culpa? Iusto qui consequatur doloribus eius
        alias!
      </p>
    </div>
  </section>
  <!-- Functions and video -->
  <section class="functions-section">
    <div class="container-fluid functions-cont">
      <div class="row">
        <div class="functionality-text col-lg-6 col-md-6 col-sm-12 col-12 p-4">
          <h3 class="functions-title">Funzionalità</h3>
          <p class="functions-paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            labore magnam fugiat quisquam error excepturi, est laboriosam cum
            perspiciatis culpa inventore incidunt dolorem. Dolorum dolore, minus
            eveniet ad reiciendis corrupti!
          </p>
        </div>
        <div class="video-cont col-lg-6 col-md-6 col-sm-12 col-12 p-4">
          <video controls class="videoplayer">
            <source src="" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
  <!-- Images -->
  <section class="images-section">
    <div class="container-fluid images-cont">
      <h2 class="text fs-1 text-center">Galleria</h2>
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="card" style="width: 18rem">
            <!--   Card with image  -->
            <img
              src="../../../public/images/Front-End-Begin/zalando.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="http://localhost:5173/public/images/Front-End-Begin/zalando.png"
                class="btn btn-primary"
                >Go somewhere</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="card" style="width: 18rem">
            <!--   Card with image  -->
            <img
              src="../../../public/images/Front-End-Begin/discord.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.objectives-cont {
  background-color: rgb(237, 237, 237);
  padding: 30px 60px;
  text-align: center;
  color: rgb(3, 35, 54);
  margin: 30px auto;
}
.functions-cont,
.images-cont {
  padding: 20px;
}
h2.text {
  color: orange;
}
.images-cont {
  background-color: rgb(57, 68, 117);
}
.videoplayer {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 1px rgba(136, 136, 136, 0.5);
}
.row {
  align-items: center;
}
.card {
  box-shadow: 0px 0px 8px -1px rgb(0, 0, 0);
  margin: 20px;
}
.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: top;
}
</style>
