import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)

Vue.config.productionTip = false

Vue.prototype.$axios = Vue.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
