<script>
export default {
  data() {
    return {
      designerSkillsTitle: "Designer 👨🏻‍🎨",
      designerSkills: [
        "Graphic Design",
        "Ui/Ux Design",
        "Design Systems",
        "Graphic Solutions",
        '"Simple is Better"',
      ],
      developerSkillsTitle: "Coder 👨🏻‍💻",
      developerSkills: [
        "Full-Stack developer",
        "Front-End Addict",
        "HTML / CSS",
        "Java Script Souls Like",
        "C0de Whisper",
      ],
      technologiesImages: [
        {
          imagePath: "../../../public/images/marmore.jpg",
        },
        {
          imagePath: "../../../public/images/marmore.jpg",
        },
        {
          imagePath: "../../../public/images/marmore.jpg",
        },
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
    <!--Skills Container-->
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <div class="designer-skills common">
            <h1>{{ designerSkillsTitle }}</h1>
            <ul>
              <li v-for="(designerSkill, index) in designerSkills" :key="index">
                {{ designerSkill }}
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <div class="developer-image-cont">
            <img src="../../../public/images/devAtWorking.jpg" alt="" />
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-6 col-12">
          <div class="developer-skills common">
            <h1>{{ developerSkillsTitle }}</h1>
            <ul>
              <li
                v-for="(developerSkill, index) in developerSkills"
                :key="index"
              >
                {{ developerSkill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Technologies Container-->
  <section class="technologies"></section>
</template>

<style lang="scss" scoped>
.container-fluid {
  .row {
    display: flex;
    align-content: center;

    .col-lg-4 {
      .common {
        padding: 60px 40px 40px 80px;
        ul {
          padding: 0;
          margin: 0;
          list-style: none;

          li {
            font-weight: 100;
            margin: 20px 0px 20px 0px;
          }
        }
      }

      .developer-image-cont {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        img {
          width: 250px;
        }
      }
    }
  }
}
</style>
