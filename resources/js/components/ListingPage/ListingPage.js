import "core-js/features/object/assign";

import { populateAmenitiesAndPrices } from '../../helpers';
import ModalWindow from '../ModalWindow';
import ImageCarousel from '../ImageCarousel/ImageCarousel.vue';
import HeaderImage from '../HeaderImage';
import FeatureList from '../FeatureList';
import ExpandableText from '../ExpandableText';
import routeMixin from '../../route-mixin';
//import headerImage from "../../../assets/images/header.jpg";
//import data from '../../data';

const serverData = JSON.parse(window.vuebnb_server_data);
const model = populateAmenitiesAndPrices(serverData.listing);

export default {
  name: "listing-page",
  mixins: [ routeMixin ],
  data() {
    return {
      id: null,
      title: null,
      about: null,
      address: null,
      amenities: [],
      prices: [],
      images: []
    }
    /*return {
      headerImageStyle: {
        "background-image": `url('${headerImage}')`
      },
      contracted: true,
      modalOpen: false,
      ...data
    };
    return Object.assign(model, {}); // Spread model object to more props of data()*/
  },
  components: {
    ModalWindow,
    ImageCarousel,
    HeaderImage,
    FeatureList,
    ExpandableText
  },
  methods: {
    assignData({ listing }) {
      Object.assign(this.$data, populateAmenitiesAndPrices(listing));
    },
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    },
  }
};
