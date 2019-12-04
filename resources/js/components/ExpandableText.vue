<template>
  <div>
    <p :class="{ contracted }">
      <slot></slot>
    </p>
    <button v-if="contracted" @click="contracted = false">
      <font-awesome-icon icon="plus" size="xs" /> More
    </button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        contracted: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  p {
    white-space: pre-wrap;
    &.contracted {
      height: 250px;
      overflow: hidden;
    }
  }
  button {
    background: transparent;
    border: 0;
    color: #008489;
    padding: 0;
    font-size: 17px;
    font-weight: bold;
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
      outline: none;
    }
  }
</style>
