<script setup>
import Navbar from './components/Navbar.vue'
import Hero from "./components/Hero.vue";
import OurProduct from "./components/OurProduct.vue";
import BestSeller from "./components/BestSeller.vue";
import Bouquet from "./components/Bouquet.vue";
import KaranganBunga from "./components/KaranganBunga.vue";
import StandingFlower from "./components/StandingFlower.vue"
import FloatingActionButtonWhatsapp from "./components/elements/button/FloatingActionButtonWhatsapp.vue";
import ContactUs from "./components/ContactUs.vue";
</script>

<template>
  <div>
    <Navbar/>
    <Hero/>
    <BestSeller/>
    <OurProduct/>
    <Bouquet />
    <KaranganBunga/>
    <StandingFlower />
    <ContactUs/>
    <!-- FAB WhatsApp -->
    <FloatingActionButtonWhatsapp/>

  </div>
</template>

<style scoped>

</style>
