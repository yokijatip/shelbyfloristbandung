<script setup>
import TitleSection from "../components/elements/text/TitleSection.vue";
import HeadingSection from "../components/elements/text/HeadingSection.vue";
import CommonButton from "../components/elements/button/CommonButton.vue";

import { ref, computed } from "vue";
// Mengambil data Json 

import Bouquet from "../assets/data/hand_bouquet.json"
import Product from "../components/card/Product.vue";
import TableBouquet from "../assets/data/table_bouquet.json"

//menggabungkan semua data karangan bunga
const bouquet = ref([
    ...Bouquet.products,
    ...TableBouquet.products,
])

// State untuk filter kategori
const selectedCategory = ref('Semua');
const categories = [
  'Semua',
  'Hand Bouquet',
  'Table Bouquet',
];



// Filter products berdasarkan types
const filteredProducts = computed(() => {
  if (selectedCategory.value === 'Semua') {
    return bouquet.value;
  }
  return bouquet.value.filter(product => product.category === selectedCategory.value);
});

// Function untuk mengganti kategori
const changeCategory = (category) => {
  selectedCategory.value = category;
  currentPage.value = 1; // Reset page ke awal saat ganti kategori
};

// untuk menampilkan beberapa halaman dulu
// Pagination state
const itemsPerPage = ref(12); // Jumlah item per halaman
const currentPage = ref(1); // Halaman saat ini

// Menghitung produk yang ditampilkan dengan filter dan pagination
const displayedProducts = computed(() => {
  const endIndex = currentPage.value * itemsPerPage.value;
  return filteredProducts.value.slice(0, endIndex);
});

// Cek apakah masih ada produk yang bisa ditampilkan
const hasMore = computed(() => {
  return displayedProducts.value.length < filteredProducts.value.length;
});

// Function untuk menambah jumlah produk yang ditampilkan
const showMore = () => {
  currentPage.value += 1;
};

// Format price to IDR
const formatPrice = (price) => {
  return price.toLocaleString("id-ID");
};

// Handle WhatsApp order
const orderViaWA = (product) => {
  const message = `Halo Admin, saya ingin memesan *${product.category}* kode *${product.code}* `;
  const whatsappUrl = `https://wa.me/6281904520743?text=${encodeURIComponent(
      message
  )}`;
  window.open(whatsappUrl, "_blank");
};

//Meta tag
import { useHead } from "@vueuse/head";
useHead({
  title: "Toko Bunga Bouquet di Bandung | Shelby Florist",
  meta: [
    {
      name: "description",
      content:
        "Pesan pilihan Bouquet terbaik di Bandung hanya di Toko Bunga Shelby Florist.",
    },
  ],
})
</script>

<template>

    <div class="bg-beige">
    <section class="py-8 md:py-12 bg-beige px-2 md:px-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Container dengan padding yang responsive -->
        <div class="mb-12">
      <TitleSection class="text-center mb-4 lg:mb-8"> Bouquet </TitleSection>
      <HeadingSection class="text-gray-600 max-w-2xl mx-auto">
        Temukan berbagai produk Bouquet pilihan dengan kualitas terbaik untuk memenuhi
        kebutuhan Anda
      </HeadingSection>
    </div>

    <!-- Filter Categories -->
        <div class="mb-8 flex flex-wrap justify-center gap-3">
          <button
            v-for="category in categories"
            :key="category"
            @click="changeCategory(category)"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              selectedCategory === category
                ? 'bg-darkBeige text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-primary/10'
            ]"
          >
            {{ category }}
          </button>
        </div>

    <!-- Grid Produk -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center">
      <!-- Card Produk -->
      <Product
              v-for="product in displayedProducts"
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

    <!-- Tombol Show More -->
        <div v-if="hasMore" class="my-8 text-center">
          <CommonButton
              @click="showMore"
          >
            Tampilkan Lebih Banyak
          </CommonButton>
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