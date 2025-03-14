<script setup>
import FlashSale from "../assets/data/flash_sale.json";
import TitleSection from "../components/elements/text/TitleSection.vue";
import HeadingSection from "../components/elements/text/HeadingSection.vue";
import CommonButtonOrderWhatsapp from "../components/elements/button/CommonButtonOrderWhatsapp.vue";

import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

const flashSale = ref(FlashSale.products);

// const selectedImage = ref(null);

// const openImage = (imageUrl) => {
//   selectedImage.value = imageUrl;
// };

// const closeImage = () => {
//   selectedImage.value = null;
// };
const showLightbox = ref(false);
const lightboxImage = ref("");

const openLightbox = (imageUrl) => {
  lightboxImage.value = imageUrl;
  showLightbox.value = true;
};

// Format harga ke IDR
const formatPrice = (price) => {
  return Number(price).toLocaleString("id-ID");
};

// Handle WhatsApp order
const orderViaWA = (product) => {
  const message = `Halo Admin, saya ingin memesan produk Flash Sale *${product.category}* kode *${product.code}* `;
  const whatsappUrl = `https://wa.me/6281904520743?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};
</script>

<template>
  <div class="bg-beige">
    <section class="py-8 md:py-12 bg-beige px-2 md:px-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-12">
          <TitleSection class="text-center mb-4 lg:mb-8">
            Flash Sale
          </TitleSection>
          <HeadingSection class="text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai produk pilihan dengan kualitas terbaik untuk
            memenuhi kebutuhan Anda
          </HeadingSection>
        </div>

        <!-- Grid Produk -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 justify-items-center"
        >
          <div
            v-for="product in flashSale"
            :key="product.id"
            class="bg-white rounded-lg shadow-md p-4 w-full max-w-sm text-center"
          >
            <!-- Gambar Produk -->
            <img
              :src="product.imageUrl"
              :alt="product.category"
              class="w-full h-auto lg:h-64 object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
              @click="openLightbox(product.imageUrl)"
            />

            <!-- Modal Zoom -->
            <VueEasyLightbox
              :visible="showLightbox"
              :imgs="lightboxImage"
              @hide="showLightbox = false"
            />

            <div class="mt-4">
              <h3 class="text-lg font-semibold">{{ product.category }}</h3>
              <p class="text-gray-500 text-sm">Code: {{ product.code }}</p>

              <!-- Harga Coret & Harga Diskon -->
              <div class="mt-2">
                <span class="text-gray-500 line-through text-sm mr-2">
                  Rp {{ formatPrice(product.price) }}
                </span>
                <span class="text-grey-900 font-bold text-lg">
                  Rp {{ formatPrice(product.diskonPrice) }}
                </span>
                <CommonButtonOrderWhatsapp
                  class="mt-2 md:mt-2 md:ml-12"
                  @click="orderViaWA(product)"
                >
                  Beli langsung
                </CommonButtonOrderWhatsapp>
              </div>
              <!-- Tombol Beli Langsung via WhatsApp -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Responsif */
@media (max-width: 640px) {
  .grid {
    margin: 0 -0.5rem;
  }
}
</style>
