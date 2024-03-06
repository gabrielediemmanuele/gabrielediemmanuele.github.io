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
  <div class="footer-bar">
    <router-link
      class="footer-link"
      aria-current="page"
      :to="{ name: 'homepage' }"
    >
      <div id="heading">&#169; 2024 Gabriele Di Emmanuele</div>
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
  </div>
</template>

<style lang="scss" scoped>
.footer-bar {
  width: 100%;
  height: 100px;
  padding: 20px 70px 20px 70px;
  background-color: rgb(11, 55, 81);

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
}

.footer-link {
  font-weight: lighter;
  font-size: 20px;
  text-decoration: none;
  color: rgb(255, 255, 255);

  &:hover {
    cursor: pointer;
    color: orange;
    text-decoration: underline;
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
      margin: 0px 20px 0px 20px;
      font-weight: 100;
      text-decoration: none;

      &:hover {
        color: orange;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  ul {
    display: none;
  }
  .footer-bar {
    justify-content: center;
    align-items: center;
    padding: 20px 20px 20px 20px;
  }
}
</style>
