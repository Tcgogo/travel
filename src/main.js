import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'assets/css/normalize.css'
import Swiper2, {Navigation, Pagination} from 'swiper';
Swiper2.use([Navigation, Pagination]);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, {

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')