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
  <div class="nav-bar">
    <router-link
      class="nav-link"
      aria-current="page"
      :to="{ name: 'homepage' }"
    >
      <img id="codewhips-logo" src="/images/logo-codewhisp.png" alt="" />
    </router-link>
    <ul>
      <li v-for="link in navLinks">
        <router-link
          class="link-name"
          aria-current="page"
          :to="`${link.linkPath}`"
        >
          {{ link.linkName }}
        </router-link>
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
  height: 100px;
  padding: 20px 70px 20px 70px;
  background-color: rgb(3, 35, 54);

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
}

#codewhips-logo {
  width: 80px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    .link-name {
      font-size: 20px;
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
</style>
