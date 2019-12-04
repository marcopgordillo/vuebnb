import CarouselControl from "./CarouselControl/CarouselControl";

export default {
  name: "image-carousel",
  props: ['images'],
  data() {
      return {
          index: 0
      }
  },
  computed: {
      image() {
          return this.images[this.index]
      }
  },
  components: {
      "carousel-control": CarouselControl
  },
  methods: {
    changeImage(val) {
      let newVal = this.index + parseInt(val);
      if (newVal < 0) {
        this.index = this.images.length -1;
      } else if (newVal === this.images.length) {
        this.index = 0;
      } else {
        this.index = newVal;
      }
    }
  }
}
