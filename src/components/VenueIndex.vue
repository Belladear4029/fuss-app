<template>
  <div>
    <google-map v-bind:center="{ lat: 51.515, lng: -0.078 }" v-bind:venues="venues" />
  </div>
</template>

<script>
import axios from 'axios';
import GoogleMap from './GoogleMap';
export default {
  name: 'VenueIndex',
  data() {
    return {
      venues: []
    }
  },
  mounted() {
    axios.get('/api/venues')
      .then(res => this.venues = res.data);
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
