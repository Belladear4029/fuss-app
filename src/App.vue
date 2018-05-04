<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/places">Places</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
body, html {
  padding: 0;
  margin: 0;
}

</style>
