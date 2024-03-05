<script>
export default {
  data() {
    return {
      navLinks: [
        {
          linkName: "about",
          linkPath: "/about",
        },
        {
          linkName: "portfolio",
          linkPath: "/portfolio",
        },
        {
          linkName: "contacts",
          linkPath: "/contacts",
        },
        {
          linkName: "App & Games",
          linkPath: "/appandgames",
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
  <div class="nav-bar">
    <img id="codewhips-logo" src="/images/logo-codewhisp.png" alt="" />
    <ul>
      <li class="link-name" v-for="link in navLinks">
        {{ link.linkName }}
      </li>
    </ul>
    <div class="social-container">
      <font-awesome-icon class="fa-brands" icon="fa-brands fa-linkedin" />
      <font-awesome-icon class="fa-brands" icon="fa-brands fa-github" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  height: 80px;
  padding: 10px;
  background-color: rgb(3, 35, 54);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

#codewhips-logo {
  height: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .link-name {
    font-size: 25px;
    color: rgb(255, 255, 255);
    font-family: "Rubik", sans-serif;
    margin: 0px 50px 0px 50px;
    font-weight: 100;

    &:hover {
      color: orange;
    }
  }
}
.social-container {
  margin-right: 20px;
  .fa-brands {
    font-size: 30px;
    color: white;
    margin: 0px 10px 0px 10px;
  }
}
</style>
