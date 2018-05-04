import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);
import Home from './components/Home';
import VenueIndex from './components/VenueIndex';

const routes = [
  { path: '/' , component: Home },
  { path: '/places' , component: VenueIndex }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
