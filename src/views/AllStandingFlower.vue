<script setup>
import Navbar from "../components/Navbar.vue"
import TitleSection from "../components/elements/text/TitleSection.vue";
import HeadingSection from "../components/elements/text/HeadingSection.vue";

import { ref } from "vue";

// Mengambil data Json 
import StandingFlower from "../assets/data/standing_flower.json"
import Product from "../components/card/Product.vue";

const standingFlower = ref(StandingFlower.products)

// Format price to IDR
const formatPrice = (price) => {
  return price.toLocaleString("id-ID");
};

// Handle WhatsApp order
const orderViaWA = (product) => {
  const message = `Halo anjing, saya ingin memesan *${product.category}* kode *${product.code}* dengan harga tertera adalah *Rp ${product.price.toLocaleString("id-ID")}*`;
  const whatsappUrl = `https://wa.me/6281904520743?text=${encodeURIComponent(
      message
  )}`;
  window.open(whatsappUrl, "_blank");
};

</script>

<template>
    <nav>
    <Navbar />
  </nav>

  <div class="bg-beige">
  <section class="py-8 md:py-12 bg-beige px-2 md:px-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Container dengan padding yang responsive -->
    <div class="mb-12">
      <TitleSection class="text-center mb-4 lg:mb-8"> Standing Flower </TitleSection>
      <HeadingSection class="text-gray-600 max-w-2xl mx-auto">
        Temukan berbagai produk pilihan dengan kualitas terbaik untuk memenuhi
        kebutuhan Anda
      </HeadingSection>
    </div>

    <!-- Grid Produk -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 justify-items-center">
      <!-- Card Produk -->
      <Product
              v-for="product in standingFlower"
              :key="`first-${product.id}`"
              :category="product.category"
              :code="product.code"
              :price="product.price"
              :imageUrl="product.imageUrl"
              :type="product.type"
              class="w-full" justify-items-center
              @order="orderViaWA"
          />
    </div>
    </div>
  </section>
  </div>
</template>

<style scoped>
@media (max-width: 640px) {
  /* Custom styling untuk mobile jika diperlukan */
  .grid {
    margin: 0 -0.5rem; /* Negative margin untuk mengkompensasi padding container */
  }
}
</style>