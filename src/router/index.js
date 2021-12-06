/*
 * @description: 
 * @Author: changjia
 * @Date: 2021-12-06 22:00:03
 * @LastEditors: changjia
 * @LastEditTime: 2021-12-06 22:12:33
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/login',
      name: 'Login',
      component: () =>
        import ('../views/login/index.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () =>
        import ('../views/home/index.vue')
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

export default router