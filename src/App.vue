<script setup>
import { RouterView } from 'vue-router';
import { defineAsyncComponent } from 'vue'; // ✅ FIX DI SINI
import Navbar from "./components/Navbar.vue";

// Lazy load
const Footer = defineAsyncComponent(() => import("./components/Footer.vue"));
const FloatingActionButtonWhatsapp = defineAsyncComponent(() =>
  import("./components/elements/button/FloatingActionButtonWhatsapp.vue")
);
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
