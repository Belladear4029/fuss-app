<template>
  <div>
    <google-map v-bind:center="{ lat: 51.515, lng: -0.078 }" v-bind:venues="venues" />
  </div>
</template>

<script>
import GoogleMap from './GoogleMap';
export default {
  name: 'VenueIndex',
  data() {
    return {
      venues: [{
        name: 'Bar Kick',
        description: 'Spacious bar with table football, hung with flags and memorabilia, showing matches on big screen',
        address: '127 Shoreditch High St, London E1 6JE',
        location: { lat: 51.526849, lng: -0.078222 }
      }, {
        name: 'Big Chill',
        description: 'Low-lit, laid-back bar with sofas and front terrace, hosting busy and eclectic DJ programme.',
        address: 'Dray Walk, London E1 6QL',
        location: { lat: 51.5215883, lng: -0.074501 }
      }]
    }
  },
  components: {
    GoogleMap
  }
}
</script>

<style scoped>
.map {
  height: calc(100vh - 52px);
}
</style>
