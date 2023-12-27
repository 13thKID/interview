import { createApp } from "vue";
import App from "./App.vue";
/** Vuex store */
import store from "./store";
/** Font-awesome */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faPenAlt,
  faCheck,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
library.add(faTrashAlt, faPenAlt, faCheck, faTimes);

createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
