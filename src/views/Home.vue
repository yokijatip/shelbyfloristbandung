<script setup>
import Hero from "../components/Hero.vue";
import OurProduct from "../components/OurProduct.vue";
import BestSeller from "../components/BestSeller.vue";
import Bouquet from "../components/Bouquet.vue";
import KaranganBunga from "../components/KaranganBunga.vue";
import StandingFlower from "../components/StandingFlower.vue"
import FloatingActionButtonWhatsapp from "../components/elements/button/FloatingActionButtonWhatsapp.vue";
import ContactUs from "../components/ContactUs.vue";
import AboutUs from "../components/AboutUs.vue";


//Meta tag
import { useHead } from "@vueuse/head";
useHead({
  title: "Toko Bunga Terbaik di Bandung Buka 24 jam | Shelby Florist",
  meta: [
    {
      name: "description",
      content:
        "Shleby Florist - Toko Bunga Terbaik di Bandung. Butuh bunga untuk acara spesialmu? Kami menyediakan berbagai macam bunga segar berkualitas dengan layanan pengiriman gratis dan cepat.",
    },
  ],
})
</script>

<template>
  <div>
    <Hero/>
    <BestSeller/>
    <OurProduct/>
    <Bouquet/>
    <KaranganBunga/>
    <StandingFlower/>
    <AboutUs/>
    <ContactUs/>

    <!-- FAB WhatsApp -->
    <FloatingActionButtonWhatsapp/>
  </div>
</template>

<style scoped>

</style>
