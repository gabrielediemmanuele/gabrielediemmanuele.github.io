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
        "Full-Stack Web Developer",
        "Front-End Addict",
        "HTML / CSS",
        "Java Script Souls Like",
        "C0de Whisper",
      ],
      technologiesImages: [
        {
          imagePath: "../../../public/images/technologies/adobePhotoshop.png",
          imageAlt: "Logo Adobe Photoshop",
        },
        {
          imagePath: "../../../public/images/technologies/adobeIllustrator.png",
          imageAlt: "Logo Adobe Illustrator",
        },
        {
          imagePath: "../../../public/images/technologies/adobeXd.png",
          imageAlt: "Logo Adobe XD",
        },
        {
          imagePath: "../../../public/images/technologies/inDesign.png",
          imageAlt: "Logo Adobe inDesign",
        },
        {
          imagePath: "../../../public/images/technologies/html5.png",
          imageAlt: "html5 logo",
        },
        {
          imagePath: "../../../public/images/technologies/css.png",
          imageAlt: "css logo",
        },
        {
          imagePath: "../../../public/images/technologies/JavaScript-logo.png",
          imageAlt: "java script logo",
        },
        {
          imagePath: "../../../public/images/technologies/bootstrap.png",
          imageAlt: "bootstrap logo",
        },
        {
          imagePath: "../../../public/images/technologies/git.png",
          imageAlt: "logo git",
        },
        {
          imagePath: "../../../public/images/technologies/node.png",
          imageAlt: "node js git",
        },
        {
          imagePath: "../../../public/images/technologies/vuejs.png",
          imageAlt: "logo vue js",
        },
        {
          imagePath: "../../../public/images/technologies/vite.png",
          imageAlt: "logo vite (vue)",
        },
        {
          imagePath: "../../../public/images/technologies/sass.png",
          imageAlt: "logo sass",
        },
        {
          imagePath: "../../../public/images/technologies/mysql.png",
          imageAlt: "logo my sql",
        },
        {
          imagePath: "../../../public/images/technologies/PHP-logo.svg.png",
          imageAlt: "logo php",
        },
        {
          imagePath: "../../../public/images/technologies/laravel.png",
          imageAlt: "logo laravel",
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
      <div class="row row-skills">
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
  <section class="technologies">
    <div class="container-fluid">
      <div class="row tech-row">
        <div
          class="col-1"
          v-for="(technology, index) in technologiesImages"
          :key="index"
        >
          <img :src="technology.imagePath" :alt="technology.imageAlt" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* Skills Container Style */
.container-fluid {
  .row-skills {
    display: flex;
    align-content: center;
    box-shadow: 0px 3px 7px 0px rgb(191, 191, 191, 0.3);
    margin-bottom: 20px;

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
/* Technologies Container Style */
.container-fluid {
  .tech-row {
    justify-content: center;
    margin-bottom: 20px;
    .col-1 {
      width: 65px;
      height: 65px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
