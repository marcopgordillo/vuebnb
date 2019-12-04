import "core-js/features/object/assign";

import { populateAmenitiesAndPrices } from '../../helpers';
import ModalWindow from '../ModalWindow/ModalWindow.vue';
import ImageCarousel from '../ImageCarousel/ImageCarousel.vue';
import HeaderImage from '../HeaderImage/HeaderImage.vue';
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
        contracted: true
    });
  },
  components: {
    ModalWindow, ImageCarousel, HeaderImage
  },
  methods: {
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    },
  }
};
