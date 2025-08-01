import Vue from "vue";
import VueRouter from "vue-router";

/* Layout */
import Layout from "@/views/Layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "layout",
    redirect: "/",
    component: Layout,
    children: [
      {
        name: "homepage",
        path: "/",
        component: () => import("@/views/Homepage.vue"),
        meta: {
          title: "主页",
        },
      },
      {
        name: "introduction",
        path: "/introduction",
        component: () => import("@/views/Introduction.vue"),
        meta: {
          title: "产品介绍",
        },
      },
      {
        name: "cooperation",
        path: "/cooperation",
        component: () => import("@/views/Cooperation.vue"),
        meta: {
          title: "合作机会",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
