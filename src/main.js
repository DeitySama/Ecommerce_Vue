import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/Header/Navbar/Navbar'
import Hero from './components/Header/Hero'
import Discovery from './components/Header/Discovery'
import Categories from './components/Header/Categories'
import Fter  from './components/Footer/Fter'
import VueRouter from 'vue-router'
import axios from 'axios'
import Routes from '../public/Routes'
Vue.use(VueRouter);

const router = new VueRouter({
  routes:Routes,
  mode:'history'
}); 

Vue.component('navbar',Navbar);
Vue.component('hero',Hero);
Vue.component('discovery',Discovery);
Vue.component('categories',Categories);
Vue.component('fter',Fter);


Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
