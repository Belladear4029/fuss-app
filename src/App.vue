<template>
  <div id="app">
    <VenueIndex />
  </div>
</template>

<script>
import VenueIndex from './components/VenueIndex';
export default {
  name: 'app',
  components: {
    VenueIndex
  }
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
}
</style>
