import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../components/pages/HomePage.vue";
import AboutPage from "../components/pages/AboutPage.vue";
import ContactsPage from "../components/pages/ContactsPage.vue";
import PortfolioPage from "../components/pages/PortfolioPage.vue";
import AppAndGamesPage from "../components/pages/AppAndGamesPage.vue";

/* Projects Pages  */
import frontEndBegin from "../components/portfolio-page-components/projects-pages/frontEndBegin.vue";
import frontEndAdvanced from "../components/portfolio-page-components/projects-pages/frontEndAdvanced.vue";
import anidio from "../components/portfolio-page-components/projects-pages/anidio.vue";
import deliveboo from "../components/portfolio-page-components/projects-pages/deliveboo.vue";

//*Apps and games Pages*/

import guessMyNumber from "../components/app-and-games-components/games/guessMyNumber.vue";
import bmiCalculator from "../components/app-and-games-components/apps/bmi-calculator.vue";
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
      name: "frontEndBegin",
      path: "/frontEndBegin",
      component: frontEndBegin,
    },
    {
      name: "frontEndAdvanced",
      path: "/frontEndAdvanced",
      component: frontEndAdvanced,
    },
    {
      name: "anidio",
      path: "/anidio",
      component: anidio,
    },
    {
      name: "deliveboo",
      path: "/deliveboo",
      component: deliveboo,
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
    {
      name: "guessMyNumber",
      path: "/guessMyNumber",
      component: guessMyNumber,
    },
    {
      name: "bmiCalculator",
      path: "/bmiCalculator",
      component: bmiCalculator,
    },
  ],
});

export { router };
