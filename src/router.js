import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Admin from './Admin.vue'
import AdminIndex from './views/Admin/Index.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path: '/admin/',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '*',
          component: AdminIndex,
        },
        {
          path: 'dashboard',
          component: AdminIndex,
        }
      ]
    },
  ]
})
