<template>
  <div class="listing-save" @click.stop="toggleSaved()">
    <button v-if="button">
      <font-awesome-icon class="heart" size="lg" :icon="[family, 'heart']" />
      {{ message }}
    </button>
    <font-awesome-icon v-else class="heart" size="lg" :icon="[family, 'heart']" />
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
      color: #fff;
      padding-right: 4px;
      filter: drop-shadow(0 0 1px #777);
    }
    button .heart {
      color: #808080;
      padding-right: 4px;
    }
  }
</style>
