import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/errors/404.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/products/:ids",
      name: "products",
      component: () => import("../views/Products.vue"),
      children: [
        {
          path: "owner",
          name: "owner",
          component: () => import("../views/Owner.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/:catchall(.*)*",
      name: "404",
      component: NotFound,
    },
  ],
});

export default router;
