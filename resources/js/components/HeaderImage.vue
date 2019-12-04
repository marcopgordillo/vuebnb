<template>
  <div class="header">
    <div
      class="header-img"
      :style="headerImageStyle"
      @click="$emit('header-clicked')"
    >
      <button>View Photos</button>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['imageUrl'],
    computed: {
      headerImageStyle() {
        return {
          "background-image": `url(${this.imageUrl})`
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    height: 320px;
    .header-img {
      //background-image: url("assets/header.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      background-color: #f5f5f5;
      height: 100%;
      cursor: pointer;
      position: relative;
    }
  }
  button {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 14px;
    padding: 7px 18px;
    color: #484848;
    line-height: 1.43;
    background: #ffffff;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid #c4c4c4;
  }
</style>
