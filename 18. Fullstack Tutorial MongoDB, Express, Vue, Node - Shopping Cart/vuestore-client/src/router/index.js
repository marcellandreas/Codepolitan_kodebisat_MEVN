import { createRouter, createWebHistory } from "vue-router";

import product from "../views/product/Index.vue";
import productdetail from "../views/product/Detail.vue";
import cart from "../views/cart/Index.vue";
import NotFound from "../views/errors/404.vue";

const routes = [
  {
    path: "/",
    name: "product",
    component: product,
  },
  {
    path: "/product/:id",
    name: "productdetail",
    component: productdetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: cart,
  },
  {
    path: "/:catchall(.*)*",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
