<script setup>
import TitleSection from "../components/elements/text/TitleSection.vue";
import CommonButton from "../components/elements/button/CommonButton.vue";
import Product from "../components/card/Product.vue";
import HeadingSection from "../components/elements/text/HeadingSection.vue";

// Mengambil data Json
import {ref, computed} from "vue";
import HandBouquet from "../assets/data/hand_bouquet.json";
import KBdukaCita from "../assets/data/karangan_bunga_duka_cita.json";
import KBselamatSukses from "../assets/data/karangan_bunga_selamat_dan_sukses.json";
import KBhappyWedding from "../assets/data/karangan_bunga_happy_wedding.json";
import TableBouquet from "../assets/data/table_bouquet.json";
import StandingFlower from "../assets/data/standing_flower.json"



// Menggabungkan semua data produk
const allProduct = ref([
  ...HandBouquet.products,
  ...TableBouquet.products,
  ...KBdukaCita.products,
  ...KBselamatSukses.products,
  ...KBhappyWedding.products,
  ...StandingFlower.products,
]);

// State untuk filter kategori
const selectedType = ref('Semua');
const types = [
  'Semua',
  'Bouquet',
  'Karangan Bunga',
  'Standing Flower'
];

// Filter products berdasarkan types
const filteredProducts = computed(() => {
  if (selectedType.value === 'Semua') {
    return allProduct.value;
  }
  return allProduct.value.filter(product => product.type === selectedType.value);
});

// untuk menampilkan beberapa halaman dulu
// Pagination state
const itemsPerPage = ref(12); // Jumlah item per halaman
const currentPage = ref(1); // Halaman saat ini

// Menghitung produk yang ditampilkan dengan filter dan pagination
const displayedProducts = computed(() => {
  const endIndex = currentPage.value * itemsPerPage.value;
  return filteredProducts.value.slice(0, endIndex);
});

/// Cek apakah masih ada produk yang bisa ditampilkan
const hasMore = computed(() => {
  return displayedProducts.value.length < filteredProducts.value.length;
});

// Function untuk mengganti kategori
const changeType = (type) => {
  selectedType.value = type;
  currentPage.value = 1; // Reset page ke awal saat ganti kategori
};

// Function untuk menambah jumlah produk yang ditampilkan
const showMore = () => {
  currentPage.value += 1;
};

// pagination end


// Format price to IDR
const formatPrice = (price) => {
  return price.toLocaleString("id-ID");
};

// Handle WhatsApp orderl
const orderViaWA = (product) => {
  const message = `Halo, saya ingin memesan *${product.category}* kode *${product.code}* dengan harga tertera adalah *Rp ${product.price.toLocaleString("id-ID")}*`;
  const whatsappUrl = `https://wa.me/6281904520743?text=${encodeURIComponent(
      message
  )}`;
  window.open(whatsappUrl, "_blank");
};





</script>

<template>

  <div class="bg-beige">
    <!-- Section Produk -->
    <section class="py-8 md:py-12 bg-beige px-2 md:px-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Container dengan padding yang responsive -->
        <div class="mb-12">
          <TitleSection class="text-center">Produk Kami</TitleSection>
          <HeadingSection class="text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai produk pilihan dengan kualitas terbaik untuk memenuhi
            kebutuhan Anda
          </HeadingSection>
        </div>

        <!-- Filter Categories -->
        <div class="mb-8 flex flex-wrap justify-center gap-3">
          <button
            v-for="type in types"
            :key="type"
            @click="changeType(type)"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              selectedType === type
                ? 'bg-darkBeige text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-primary/10'
            ]"
          >
            {{ type }}
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
