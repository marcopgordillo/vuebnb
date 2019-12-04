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
    faWifi
} from "@fortawesome/free-solid-svg-icons";
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
    faTimes
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
