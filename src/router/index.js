import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      meta: {
        title: "Toko Bunga Terbaik di Bandung Buka 24 jam | Shelby Florist",
        name: "description",
        content:
          "Shleby Florist - Toko Bunga Terbaik di Bandung. Butuh bunga untuk acara spesialmu? Kami menyediakan berbagai macam bunga segar berkualitas dengan layanan pengiriman gratis dan cepat.",
      },
    },
    {
      path: "/home",
      redirect: "/"
    },

    {
      path: "/AllProduct",
      name: "AllProduct",
      component: () => import("../views/AllProduct.vue"),
      meta: {
        title: "Toko Bunga terbaik di Bandung | Shelby Florist",
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
        title: "Toko Bunga Karangan Bunga Bandung  | Shelby Florist",
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
        title: "Toko Bunga Bouquet Bandung | Shelby Florist",
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
        title: "Toko Bunga Standing Flower Bandung | Shelby Florist",
        name: "description",
        content:
          "Pesan pilihan Standing Flower terbaik di Bandung hanya di Toko Bunga Shelby Florist.",
      },
    },
    {
      path: "/FlashSale",
      name: "FlashSale",
      component: () => import("../views/FlashSale.vue"),
      meta: {
        title: "Toko Bunga Bandung | Shelby Florist",
        name: "description",
        content:
          "Pesan pilihan Promo terbaik di Bandung hanya di Toko Bunga Shelby Florist.",
      },
    },
    {
      path: "/PremiumBouquet",
      name: "PremiumBouquet",
      component: () => import("../views/PremiumBouquet.vue"),
      meta: {
        title: "Toko Bunga Bandung | Shelby Florist",
        name: "description",
        content:
          "Pesan pilihan Promo terbaik di Bandung hanya di Toko Bunga Shelby Florist.",
      },
    },

    {
      path: "/:catchall(.*)*",
      name: '404',
      component: () => import("../views/errors/404.vue")
    }
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
