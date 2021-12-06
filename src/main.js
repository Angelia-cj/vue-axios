/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-06 21:56:21
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-06 22:16:16
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$axios = axios

import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')