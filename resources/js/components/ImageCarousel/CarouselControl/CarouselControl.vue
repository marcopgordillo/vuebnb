<template>
    <font-awesome-icon class="carousel-control" :icon="icon" @click="clicked"></font-awesome-icon>
</template>

<script>
    export default {
      name: "carousel-control",
      props: ['dir'],
      computed: {
        icon() {
          return `chevron-${this.dir}`
        }
      },
      methods: {
        clicked() {
          this.$emit('change-image', this.dir === 'left' ? -1 : 1);
        }
      }
    }
</script>

<style lang="scss" scoped>
    .carousel-control {
      padding: 1rem;
      color: #ffffff;
      opacity: 0.85;
      cursor: pointer;
      @media (min-width: 744px) {
        font-size: 3rem;
      }
    }
</style>
