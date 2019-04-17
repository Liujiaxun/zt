import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '../components/Login/login'
import Index from '../components/Index'
import {Routers} from '../core/menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/index',
      meta: { requiresAuth: true },
      children:[
        ...Routers()
      ]
    },{
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }
    }
  ]
})
