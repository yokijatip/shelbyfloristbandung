import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },

    {
      path: "/AllProduct",
      name: "AllProduct",
      component: () => import("../views/AllProduct.vue"),
    },

    {
      path: "/KaranganBunga",
      name: "AllKaranganBunga",
      component: () => import("../views/AllKaranganBunga.vue"),
    },
    {
      path: "/Bouquet",
      name: "AllBouquet",
      component: () => import("../views/AllBouquet.vue"),
    },
    {
      path: "/StandingFlower",
      name: "StandingFlower",
      component: () => import("../views/AllStandingFlower.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;