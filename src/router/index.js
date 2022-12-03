import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home.vue"),
    redirect:'/Home'
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
