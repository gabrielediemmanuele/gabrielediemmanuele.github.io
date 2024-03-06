<script>
export default {
  data() {
    return {
      navLinks: [
        {
          linkName: "about",
          linkPath: "about",
        },
        {
          linkName: "portfolio",
          linkPath: "portfolio",
        },
        {
          linkName: "contacts",
          linkPath: "contacts",
        },
        {
          linkName: "app & games",
          linkPath: "appandgames",
        },
      ],
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- Router Link Logo (Homepage)-->
      <router-link
        class="nav-link"
        aria-current="page"
        :to="{ name: 'homepage' }"
      >
        <img id="codewhips-logo" src="/images/logo-codewhisp.png" alt="" />
      </router-link>
      <!-- Hamburgher Menu-->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="link in navLinks" :key="link.id">
            <router-link
              class="link-name"
              aria-current="page"
              :to="`${link.linkPath}`"
            >
              {{ link.linkName }}
            </router-link>
          </li>
          <li id="social-cont-ham-menu">
            <a href="https://www.linkedin.com/in/gabriele-di-emmanuele/"
              ><font-awesome-icon
                class="fa-brands"
                icon="fa-brands fa-linkedin"
            /></a>
            <a href="https://github.com/gabrielediemmanuele"
              ><font-awesome-icon class="fa-brands" icon="fa-brands fa-github"
            /></a>
          </li>
        </ul>
      </div>
      <div class="social-container">
        <a href="https://www.linkedin.com/in/gabriele-di-emmanuele/"
          ><font-awesome-icon class="fa-brands" icon="fa-brands fa-linkedin"
        /></a>
        <a href="https://github.com/gabrielediemmanuele"
          ><font-awesome-icon class="fa-brands" icon="fa-brands fa-github"
        /></a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  margin: 0 !important;
  padding: 0;
}

.container-fluid {
  width: 100%;
  padding: 0;
  background-color: rgb(3, 35, 54);
  box-sizing: border-box;

  .navbar-toggler {
    color: white;
    background-color: white;
    margin-right: 50px;
  }
}

#codewhips-logo {
  width: 70px;
  margin: 10px 10px 10px 50px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0px auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    .link-name {
      font-size: 18px;
      color: rgb(255, 255, 255);
      font-family: "Rubik", sans-serif;
      margin: 0px 40px 0px 40px;
      font-weight: 100;
      text-decoration: none;

      &:hover {
        color: orange;
        cursor: pointer;
      }
    }
  }
}

.social-container {
  margin-right: 50px;
  .fa-brands {
    font-size: 40px;
    color: white;
    margin: 0px 10px 0px 10px;
    &:hover {
      color: orange;
      cursor: pointer;
    }
  }
}

#social-cont-ham-menu {
  display: none;
  .fa-brands {
    font-size: 40px;
    color: white;
    margin: 0px 10px 0px 10px;
    &:hover {
      color: orange;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 992px) {
  .social-container {
    display: none;
  }

  ul {
    background-color: rgb(10, 61, 91);
    box-shadow: inset 0px 8px 10px -4px rgba(0, 0, 0, 0.8);
    padding-top: 10px;
    li {
      border-bottom: 1px solid rgb(3, 35, 54);
      width: 100%;
      text-align: center;
      padding: 10px 0 10px 0;
      .link-name {
        font-size: 30px;
      }
    }
  }
  #social-cont-ham-menu {
    display: block;
  }
}
</style>
