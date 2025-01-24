import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: {
        title: "Shelby Florist",
        name: "description",
        content:
          "Selamat datang di Shelby Florist, toko bunga terbaik di Bandung.",
      },
    },

    {
      path: "/AllProduct",
      name: "AllProduct",
      component: () => import("../views/AllProduct.vue"),
      meta: {
        title: "Produk Kami | Shelby Florist",
        name: "description",
        content:
          "Pesan pilihan berbagai macam bunga terbaik di Bandung hanya di Toko Bunga Shelby Florist.",
      },
    },

    {
      path: "/KaranganBunga",
      name: "AllKaranganBunga",
      component: () => import("../views/AllKaranganBunga.vue"),
      meta: {
        title: "Karangan Bunga | Shelby Florist",
        name: "description",
        content:
          "Pesan pilihan Karangan Bunga terbaik di Bandung hanya di Toko Bunga Shelby Florist.",
      },
    },
    {
      path: "/Bouquet",
      name: "AllBouquet",
      component: () => import("../views/AllBouquet.vue"),
      meta: {
        title: "Bouquet | Shelby Florist",
        name: "description",
        content:
          "Pesan pilihan Bouquet terbaik di Bandung hanya di Toko Bunga Shelby Florist.",
      },
    },
    {
      path: "/StandingFlower",
      name: "StandingFlower",
      component: () => import("../views/AllStandingFlower.vue"),
      meta: {
        title: "Standing Flower | Shelby Florist",
        name: "description",
        content:
          "Pesan pilihan Standing Flower terbaik di Bandung hanya di Toko Bunga Shelby Florist.",
      },
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