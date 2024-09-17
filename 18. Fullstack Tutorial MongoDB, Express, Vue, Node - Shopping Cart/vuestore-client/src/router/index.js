import { createRouter, createWebHistory } from "vue-router";

import product from "../views/product/Index.vue";
import productdetail from "../views/product/Detail.vue";
import cart from "../views/cart/Index.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
