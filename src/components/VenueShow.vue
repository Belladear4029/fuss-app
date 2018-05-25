<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-2">{{ venue.name }}</h1>
      <h2 class="subtitle is-5">{{ venue.address }}</h2>
      <div class="columns">
        <div class="column">
          <img v-bind:src="venue.image" v-bind:alt="venue.name" />
          <div class="content">
            <p>{{ venue.description }}</p>
          </div>
        </div>
        <div class="column">
          <google-map v-bind:center="venue.location" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import GoogleMap from './GoogleMap';
export default {
  name: 'VenueShow',
  data() {
    return {
      venue: {}
    };
  },
  mounted() {
    axios.get(`/api/venues/${this.$route.params.id}`)
      .then(res => this.venue = res.data);
  },
  components: {
    GoogleMap
  }
};
</script>

<style scoped>
.map {
  height: 250px;
}
</style>
