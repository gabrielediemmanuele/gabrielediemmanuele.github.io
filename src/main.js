import { createApp } from "vue";
// Scss
import "./assets/styles/global.scss";

// Vue Router
import { router } from "./router/router";

//Bootstrap
import * as bootstrap from "bootstrap";

/* import fontawesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faGithub, faEnvelope);

import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
