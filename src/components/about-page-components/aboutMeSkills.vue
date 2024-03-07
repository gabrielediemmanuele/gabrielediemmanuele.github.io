<script>
export default {
  data() {
    return {
      softwareSkills: [],
      developerSkills: [],
      technologiesImages: [
        {
          imagePath: "../../../public/images/marmore.jpg",
        },
        {
          imagePath: "../../../public/images/meandlove.jpg",
        },
        {
          imagePath: "../../../public/images/tumpi.jpg",
        },
        {
          imagePath: "../../../public/images/ghost-rider-paint.jpg",
        },
        {
          imagePath: "../../../public/images/cooking.jpg",
        },
        {
          imagePath: "../../../public/images/working.jpg",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="skills-section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-sm-12">
          <div class="software-cont"></div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="developer-image-cont"></div>
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="developer-skil"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
