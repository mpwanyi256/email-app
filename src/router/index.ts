import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "inbox",
    component: () =>import("../views/Home.vue"),
    meta: {
      name: 'Inbox',
      require_login: true,
    }
  },
  {
    path: "/achive",
    name: "achive",
    component: () =>import("../views/Home.vue"),
    meta: {
      name: 'Achive',
      require_login: true,
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
