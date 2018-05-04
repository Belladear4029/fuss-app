<template>
  <div class="map"></div>
</template>

<script>
export default {
  name: 'GoogleMap',
  props: ['center', 'venues'],
  mounted() {
    this.map = new google.maps.Map(this.$el, {
      center: this.center,
      zoom: 14
    });

    this.infoWindow = new google.maps.InfoWindow();

    this.markers = this.venues.map(venue => {
      const marker = new google.maps.Marker({
        position: venue.location,
        map: this.map
      });

      marker.addListener('click', () => {
        this.infoWindow.setContent(`
          <h3>${venue.name}</h3>
          <p>${venue.address}</p>
        `)
        this.infoWindow.open(this.map, marker);
      });
    });
  }
}
</script>
