import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/* Layout */
import Layout from '@/views/Layout'

Vue.use(VueRouter)

const routes = [{
  path: '',
  name: 'layout',
  redirect: '/homepage',
  component: Layout,
  children: [{
    "name": "homepage",
    "path": "/homepage",
    component: () => import("@/views/Homepage.vue"),
    "meta": {
      "title": "主页",
    }
  }, {
    "name": "introduction",
    "path": "/introduction",
    component: () => import("@/views/Introduction.vue"),
    "meta": {
      "title": "介绍",
    },
  }]
}, {
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
