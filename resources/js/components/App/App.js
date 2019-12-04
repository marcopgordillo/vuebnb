import "core-js/features/object/assign";

import { populateAmenitiesAndPrices } from '../../helpers';
//import headerImage from "../../../assets/images/header.jpg";
//import data from '../../data';

let model = JSON.parse(window.vuebnb_listing_model);
model = populateAmenitiesAndPrices(model);

export default {
  name: "app",
  data() {
    /*return {
      headerImageStyle: {
        "background-image": `url('${headerImage}')`
      },
      contracted: true,
      modalOpen: false,
      ...data
    };*/
    return Object.assign(model, {
        headerImageStyle: {
            "background-image": `url(${model.images[0]})`
        },
        contracted: true,
        modalOpen: false
    });
  },
  watch: {
    modalOpen: function() {
      const className = "modal-open";
      if (this.modalOpen) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    }
  },
  methods: {
    escapeKeyListener(evt) {
      let code;
      if (evt.code !== "undefined") {
        code = evt.key;
      } else {
        code = evt.keyCode;
      }
      if ((code === 27 || code === "Escape") && this.modalOpen) {
        this.modalOpen = false;
      }
    }
  },
  created() {
    document.addEventListener("keyup", this.escapeKeyListener);
  },
  destroyed() {
    document.removeEventListener("keyup", this.escapeKeyListener);
  }
};
