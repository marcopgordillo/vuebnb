import Vue from "vue";

import { library, config, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faLaptop,
  faPaw,
  faPlus,
  faTimes,
  faTv,
  faUtensils,
  faWifi,
  faChevronLeft,
  faChevronRight,
  faHeart as fasHeart
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Make sure you tell Font Awesome to skip auto-inserting CSS into the <head>
config.autoAddCss = false;

library.add(
  faWifi,
  faPaw,
  faTv,
  faUtensils,
  faCoffee,
  faLaptop,
  faPlus,
  faTimes,
  faChevronLeft,
  faChevronRight,
  fasHeart,
  farHeart
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
