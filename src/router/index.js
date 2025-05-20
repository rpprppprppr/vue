import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import Catalog from "@/views/Catalog.vue";
import Cart from "@/views/Cart.vue";
import Product from "@/views/Product.vue";
import Registration from "@/views/Registration.vue";
import { ROUTES } from "@/config/constants/routes.js";

const routes = [
  { path: "/", name: ROUTES.HOME, component: Home },
  { path: "/catalog", name: ROUTES.CATALOG, component: Catalog },
  { path: "/cart", name: ROUTES.CART, component: Cart },
  { path: "/product", name: ROUTES.PRODUCT, component: Product },
  { path: "/registration", name: ROUTES.REGISTRATION, component: Registration },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});
