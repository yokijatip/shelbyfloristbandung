<script setup>
import { RouterView } from 'vue-router';
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue";
import FloatingActionButtonWhatsapp from "./components/elements/button/FloatingActionButtonWhatsapp.vue";
</script>

<template>
  <nav class="sticky top-0 z-[100]">
    <Navbar/>
  </nav>
  <main>
  <RouterView/>
  </main>
  <footer class="border-t-[1px] border-darkBeige">
    <Footer/>
  </footer>
  <!-- FAB WhatsApp -->
    <FloatingActionButtonWhatsapp/>
</template>