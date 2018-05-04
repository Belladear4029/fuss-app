<template>
  <div class="field">
    <label for="location">Location</label>
    <input ref="autocomplete" class="input" placeholder="Location" name="location" />
  </div>
</template>

<script>
export default {
  name: 'Autocomplete',
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      { types: ['geocode'] }
    );
  }
}
</script>

<style>
</style>
