<template>
  <div class="listing-summary">
    <router-link :to="{ name: 'listing', params: { listing: listing.id } }">
      <div class="wrapper">
        <div class="thumbnail" :style="backgroundImageStyle"></div>
        <div class="info title">
          <span>{{ listing.price_per_night }}</span>
          <span>{{ listing.title }}</span>
        </div>
        <div class="info address">{{ listing.address }}</div>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    props: [ 'listing' ],
    computed: {
      backgroundImageStyle() {
        return {
          'background-image': `url("${this.listing.thumb}")`
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .listing-summary {
    flex: 0 0 auto;
    a {
      text-decoration: none;
    }
    .wrapper {
      max-width: 350px;
      display: block;
    }
    .thumbnail {
      width: 350px;
      height: 250px;
      background-size: cover;
      background-position: center;
    }
    .info {
      color: #484848;
      word-wrap: break-word;
      letter-spacing: 0.2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &.title {
        padding-top: 5px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      }
      &.address {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
</style>
