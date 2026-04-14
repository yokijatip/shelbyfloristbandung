<script setup>
import { RouterView, defineAsyncComponent } from 'vue-router';
import Navbar from "./components/Navbar.vue"; // ✅ Tetap eager (visible langsung)

// ✅ Lazy load komponen yang tidak perlu langsung render
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
