import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../components/pages/HomePage.vue";
import AboutPage from "../components/pages/AboutPage.vue";
import ContactsPage from "../components/pages/ContactsPage.vue";
import PortfolioPage from "../components/pages/PortfolioPage.vue";
import AppAndGamesPage from "../components/pages/AppAndGamesPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "about",
      path: "/about",
      component: AboutPage,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: PortfolioPage,
    },
    {
      name: "contacts",
      path: "/contacts",
      component: ContactsPage,
    },
    {
      name: "appandgames",
      path: "/appandgames",
      component: AppAndGamesPage,
    },
  ],
});

export { router };
