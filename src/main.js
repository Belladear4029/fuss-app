import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

require('./assets/scss/style.scss');

Vue.config.productionTip = false;

Vue.use(VueRouter);
import Home from './components/Home';
import VenueIndex from './components/VenueIndex';
import Autocomplete from './components/Autocomplete';

const routes = [
  { path: '/' , component: Home },
  { path: '/venues' , component: VenueIndex },
  { path: '/venues/new', component: Autocomplete }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
