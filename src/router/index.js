import Vue from 'vue'
import Router from 'vue-router'

import Design from '../views/formdesign/Design.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Design
    },
    {
      path: '/price',
      name: 'price',
      component: () => import('../demo/Price.vue')
    }
  ]
})
