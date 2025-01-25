<script setup>
import Hero from "../components/Hero.vue";
import OurProduct from "../components/OurProduct.vue";
import BestSeller from "../components/BestSeller.vue";
import Bouquet from "../components/Bouquet.vue";
import KaranganBunga from "../components/KaranganBunga.vue";
import StandingFlower from "../components/StandingFlower.vue"
import FloatingActionButtonWhatsapp from "../components/elements/button/FloatingActionButtonWhatsapp.vue";
import ContactUs from "../components/ContactUs.vue";
import WhyChooseUs from "../components/WhyChooseUs.vue";
import AboutUs from "../components/AboutUs.vue";

const products = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dvffsa6kt/image/upload/v1736506831/450_zn4wux.jpg",
    title: "Sunflower Basket",
    subtitle: "Birthday Special",
    price: 850000
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dvffsa6kt/image/upload/v1736506829/850_gjvulv.jpg",
    title: "Orchid Vase",
    subtitle: "Birthday Special",
    price: 850000
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dvffsa6kt/image/upload/v1736506828/800-2_xqzkvs.jpg",
    title: "Lavender Basket",
    subtitle: "Birthday Special",
    price: 850000
  }
]

//Meta tag
import { useHead } from "@vueuse/head";
useHead({
  title: "Toko Bunga Terbaik di Bandung Buka 24 jam | Shelby Florist",
  meta: [
    {
      name: "description",
      content:
        "Selamat datang di Shelby Florist, toko bunga terbaik di Bandung.",
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
    <WhyChooseUs/>
    <ContactUs/>
    
    <!-- FAB WhatsApp -->
    <FloatingActionButtonWhatsapp/>
  </div>
</template>

<style scoped>

</style>
