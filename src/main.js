import { createApp } from "vue";
// Scss
import "./assets/styles/global.scss";

// Vue Router
import { router } from "./router/router";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
