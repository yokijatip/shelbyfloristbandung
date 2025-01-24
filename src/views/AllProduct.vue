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
import { RouterLink } from "vue-router";


// Menggabungkan semua data produk
const allProduct = ref([
  ...HandBouquet.products,
  ...TableBouquet.products,
  ...KBdukaCita.products,
  ...KBselamatSukses.products,
  ...KBhappyWedding.products,
  ...StandingFlower.products,
]);

// untuk menampilkan beberapa halaman dulu
// Pagination state
const itemsPerPage = ref(12); // Jumlah item per halaman
const currentPage = ref(1); // Halaman saat ini

// menghitung property untuk produk yang ditampilkan
const displayedProducts = computed(() => {
  const startIndex = 0;
  const endIndex = currentPage.value * itemsPerPage.value;
  return allProduct.value.slice(startIndex, endIndex);
});

// menghitung property untuk mengecek apakah masih ada produk yang bisa ditampilkan
const hasMore = computed(() => {
  return displayedProducts.value.length < allProduct.value.length;
});

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
  const message = `Halo Admin, saya ingin memesan *${product.category}* kode *${product.code}* `;
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
          <RouterLink to="/Bouquet">
            <CommonButton>
              Hand Bouquet
            </CommonButton>
          </RouterLink>
          <RouterLink to="/KaranganBunga">
            <CommonButton>
              Karangan Bunga
            </CommonButton>
          </RouterLink>
          <RouterLink to="/StandingFlower">
            <CommonButton>
              Standing Flower
            </CommonButton>
          </RouterLink>
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
