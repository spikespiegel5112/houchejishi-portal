import Vue from 'vue'
import VueRouter from 'vue-router'

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
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
