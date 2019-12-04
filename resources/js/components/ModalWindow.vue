<template>
  <div id="modal" :class="{ show: modalOpen }">
    <button v-on:click="modalOpen = false" class="modal-close">
      <font-awesome-icon icon="times" /><span class="sr-only">Close</span>
    </button>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        modalOpen: false
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
    created() {
      document.addEventListener("keyup", this.escapeKeyListener);
    },
    destroyed() {
      document.removeEventListener("keyup", this.escapeKeyListener);
    }
  }
</script>
<style lang="scss" scoped>
  #modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
    background-color: rgba(0,0,0,0.85);
    &.show {
     display: block;
    }
  }
  .modal-content {
    height: 100%;
    max-width: 105vh;
    padding-top: 12vh;
    margin: 0 auto;
    position: relative;
  }
  .modal-close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0px 28px 8px;
    font-size: 2em;
    width: auto;
    height: auto;
    background: transparent;
    border: 0;
    outline: none;
    color: #ffffff;
    z-index: 1000;
    font-weight: 100;
    line-height: 1;
  }
</style>
