import { populateAmenitiesAndPrices } from '../../helpers';
import ModalWindow from '../ModalWindow';
import ImageCarousel from '../ImageCarousel/ImageCarousel.vue';
import HeaderImage from '../HeaderImage';
import FeatureList from '../FeatureList';
import ExpandableText from '../ExpandableText';

export default {
  name: "listing-page",
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
  },
  computed: {
    listing() {
      return populateAmenitiesAndPrices(
        this.$store.getters.getListing(this.$route.params.listing)
      );
    }
  }
};
