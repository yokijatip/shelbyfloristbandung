<script setup>
import Navbar from "../components/Navbar.vue";
import TitleSection from "../components/elements/text/TitleSection.vue";
import SubTitleSection from "../components/elements/text/SubTitleSection.vue";

// Mengambil data Json
import { ref } from "vue";
import HandBouquet from "../assets/data/hand_bouquet.json";
import KBdukaCita from "../assets/data/karangan_bunga_duka_cita.json";
import KBselamatSukses from "../assets/data/karangan_bunga_selamat_dan_sukses.json";
import KBhappyWedding from "../assets/data/karangan_bunga_happy_wedding.json";

// Menggabungkan semua data produk
const allProduct = ref([
  ...HandBouquet.products,
  ...KBdukaCita.products,
  ...KBselamatSukses.products,
  ...KBhappyWedding.products,
]);

// Format price to IDR
const formatPrice = (price) => {
  return price.toLocaleString("id-ID");
};

// Handle WhatsApp order
const orderViaWA = (product) => {
  const message = `Halo, saya ingin memesan ${product.category} dengan kode ${product.code}`;
  const whatsappUrl = `https://wa.me/6285759067426?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};
</script>

<template>
  <nav>
    <Navbar />
  </nav>

  <!-- Section Produk -->
  <section
    class="min-h-screen px-8 max-w-7xl mx-auto bg-white py-8 md:pt-16 md:px-0 lg:px-7 xl:px-32"
  >
    <div class="mb-12">
      <TitleSection class="text-center mb-4 lg:mb-8">
        Produk Kami
      </TitleSection>
      <SubTitleSection class="text-gray-600 max-w-2xl mx-auto">
        Temukan berbagai produk pilihan dengan kualitas terbaik untuk memenuhi
        kebutuhan Anda
      </SubTitleSection>
    </div>

    <!-- Grid Produk -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Card Produk -->
      <div
        v-for="product in allProduct"
        :key="product.id"
        class="bg-white rounded-lg shadow-md overflow-hidden"
      >
        <!-- Container Gambar -->
        <div class="w-full h-64 overflow-hidden">
          <img
            :src="product.imageUrl"
            :alt="product.category"
            loading="lazy"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Informasi Produk -->
        <div class="p-4">
          <!-- Nama dan Kode Produk -->
          <div class="flex justify-between items-center mb-2">
            <h3 class="text-lg font-semibold">{{ product.category }}</h3>
            <span class="text-gray-600">{{ product.code }}</span>
          </div>

          <!-- Harga -->
          <p class="text-xl font-bold text-green-600 mb-4">
            Rp {{ formatPrice(product.price) }}
          </p>

          <!-- Tombol Order -->
          <button
            @click="orderViaWA(product)"
            class="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Order via WA
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
