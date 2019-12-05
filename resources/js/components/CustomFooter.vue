<template>
  <div id="footer" class="footer">
    <hr />
    <div :class="containerClass">
      <p>
        <img class="icon" src="/images/logo.png">
        <span>
          <strong>Vuebnb</strong>. A full-stack Vue.js and Laravel demo
          app
        </span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      containerClass() {
        // this.$route.name is either 'home' or 'listing'
        return `${this.$route.name}-container`;
      }
    }
  }
</script>
<style lang="scss" scoped>
  .footer {
    margin-bottom: 3em;
    .icon {
      height: 23px;
      display: inline-block;
      margin-bottom: -6px;
    }
    p {
      font-size: 15px;
      color: #767676 !important;
      display: flex;
      img {
        padding-right: 6px;
      }
    }
  }
  hr {
    border-bottom: 1px solid #dbdbdb;
    margin: 3em 0;
  }
</style>
