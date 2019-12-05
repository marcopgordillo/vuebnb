import "core-js/features/object/assign";

import { populateAmenitiesAndPrices } from '../../helpers';
import ModalWindow from '../ModalWindow';
import ImageCarousel from '../ImageCarousel/ImageCarousel.vue';
import HeaderImage from '../HeaderImage';
import FeatureList from '../FeatureList';
import ExpandableText from '../ExpandableText';
//import headerImage from "../../../assets/images/header.jpg";
//import data from '../../data';

const serverData = JSON.parse(window.vuebnb_listing_data);
const model = populateAmenitiesAndPrices(serverData.listing);

export default {
  name: "listing-page",
  data() {
    /*return {
      headerImageStyle: {
        "background-image": `url('${headerImage}')`
      },
      contracted: true,
      modalOpen: false,
      ...data
    };*/
    return Object.assign(model, {}); // Spread model object to more props of data()
  },
  components: {
    ModalWindow,
    ImageCarousel,
    HeaderImage,
    FeatureList,
    ExpandableText
  },
  methods: {
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    },
  }
};
