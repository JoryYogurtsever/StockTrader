import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import { store } from './store/store.js'

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter ({
    mode: 'history',
    routes
});



new Vue({
  el: '#app',
    store,
  router,
  render: h => h(App)
})
