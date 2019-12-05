<template>
  <div class="home-container">
    <listing-summary-group
      v-for="(group, country) in listing_groups"
      :key="country"
      :listings="group"
      :country="country"
      class="listing-summary-group"
    />
  </div>
</template>
<script>
  import { groupByCountry } from '../helpers';

  import ListingSummary from './ListingSummary.vue';
  import ListingSummaryGroup from './ListingSummaryGroup.vue';
  import routeMixin from '../route-mixin';

  const serverData = JSON.parse(window.vuebnb_server_data);
  const listing_groups = groupByCountry(serverData.listings);

  export default {
    mixins: [ routeMixin ],
    data() {
      return { listing_groups: [] }
    },
    methods: {
      assignData({ listings }) {
        this.listing_groups = groupByCountry(listings);
      },
    },
    components: {
      ListingSummaryGroup
    }
  }
</script>
<style lang="scss" scoped>
  .listing-summary-group {
    padding-bottom: 20px;
  }
  .listing-summaries {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    > .listing-summary {
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
</style>
