<template>
  <div class="listing-save" @click.stop="toggleSaved()">
    <button v-if="button">
      <font-awesome-icon :class="'heart ' + classes" size="lg" :icon="[family, 'heart']" />
      {{ message }}
    </button>
    <font-awesome-icon :class="'heart ' + classes" v-else class="heart" size="lg" :icon="[family, 'heart']" />
  </div>
</template>
<script>
  export default {
    props: [ 'id', 'button' ],
    methods: {
      toggleSaved() {
        this.$store.commit('toggleSaved', this.id);
      }
    },
    computed: {
      isListingSaved() {
        return this.$store.state.saved.find(saved => saved === this.id);
      },
      family() {
        return this.isListingSaved ? 'fas' : 'far';
      },
      classes() {
        return this.isListingSaved ? 'heart-red' : 'heart-white';
      },
      message() {
        return this.isListingSaved ? 'Saved' : 'Save';
      }
    }
  }
</script>
<style lang="scss" scoped>
  .listing-save {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    > .heart {
      padding-right: 4px;
    }
    button .heart {
      color: #808080;
      padding-right: 4px;
    }
  }
  .heart-white {
    color: #fff;
    filter: drop-shadow(0 0 1px #777);
  }
  .heart-red {
    color: #ff5a5f;
    filter: drop-shadow(0 0 1px #fff);
  }
</style>
