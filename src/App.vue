<template>
  <div id="app">
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/places">Places</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
}
</style>
