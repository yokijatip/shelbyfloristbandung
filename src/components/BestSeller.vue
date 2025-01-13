<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import HeadingSection from "./elements/text/HeadingSection.vue";
import Product from "./card/Product.vue";
import handBouquet from "../assets/data/hand_bouquet.json"

const products = handBouquet.products
// Bagi products menjadi dua bagian
// Bagi products menjadi dua bagian seimbang
const firstHalf = products.slice(0, Math.ceil(products.length / 2));
const secondHalf = products.slice(Math.ceil(products.length / 2));

// Refs untuk scroll container
const topRowRef = ref(null);
const bottomRowRef = ref(null);

// Fungsi scroll manual dengan mouse wheel
const handleWheel = (event, ref) => {
  if (ref && ref.value) {
    ref.value.scrollLeft += event.deltaY;
    // Prevent page scroll
    event.preventDefault();
  }
};

const orderViaWA = (product) => {
  const message = `Halo Admin, saya ingin memesan *${product.category}* kode *${product.code}* dengan harga tertera adalah *Rp ${product.price.toLocaleString("id-ID")}*`;
  const whatsappUrl = `https://wa.me/6281904520743?text=${encodeURIComponent(
      message
  )}`;
  window.open(whatsappUrl, "_blank");
};
// Auto Scroll START
// const topRowRef = ref(null)
// const bottomRowRef = ref(null)
// let topScrollInterval = null
// let bottomScrollInterval = null

// const startAutoScroll = () => {
//   topScrollInterval = setInterval(() => {
//     if (topRowRef.value) {
//       topRowRef.value.scrollLeft += 1
//       if (topRowRef.value.scrollLeft >= topRowRef.value.scrollWidth / 2) {
//         topRowRef.value.scrollLeft = 0
//       }
//     }
//   }, 20)

//   bottomScrollInterval = setInterval(() => {
//     if (bottomRowRef.value) {
//       bottomRowRef.value.scrollLeft -= 1
//       if (bottomRowRef.value.scrollLeft <= 0) {
//         bottomRowRef.value.scrollLeft = bottomRowRef.value.scrollWidth / 2
//       }
//     }
//   }, 20)
// }

// const stopAutoScroll = () => {
//   clearInterval(topScrollInterval)
//   clearInterval(bottomScrollInterval)
// }

// onMounted(() => {
//   startAutoScroll()
// })

// onUnmounted(() => {
//   stopAutoScroll()
// })
//   Auto Scroll End


</script>

<template>
  <section class="bg-white">
    <div class="min-h-screen max-w-0xl mx-auto px-0 sm:px-6 lg:px-0 bg-white py-8">
      <!--  Title  -->
      <div class="flex flex-col mb-8 md:mb-16 px-8">
        <SubTitleSection>
          Produk best seller
        </SubTitleSection>
        <TitleSection>
          Top Bouquet, Karangan
          Bunga &
          Standing Flower
        </TitleSection>
        <HeadingSection>
          Produk yang kami tawarkan berkualitas, indah sehingga memenuhi kebutuhan anda
        </HeadingSection>
      </div>

      <!--  Best Seller Content  -->
      <!-- Untuk Sementara pake data hand bouquet dulu -->
      <!--  Best Seller Content  -->
      <div class="space-y-8">
        <!-- Top Row -->
        <div 
          ref="topRowRef"
          @wheel="(e) => handleWheel(e, topRowRef)"
          class="overflow-x-auto scroll-smooth group"
        >
          <div class="flex gap-8 pb-6">
            <Product
              v-for="product in firstHalf"
              :key="`first-${product.id}`"
              :category="product.category"
              :code="product.code"
              :price="product.price"
              :imageUrl="product.imageUrl"
              :type="product.type"
              @order="orderViaWA"
              class="flex-shrink-0 w-[300px]"
            />
          </div>
        </div>

        <!-- Bottom Row -->
        <div 
          ref="bottomRowRef"
          @wheel="(e) => handleWheel(e, bottomRowRef)"
          class="overflow-x-auto scroll-smooth group"
        >
          <div class="flex gap-8 pb-6">
            <Product
              v-for="product in secondHalf"
              :key="`second-${product.id}`"
              :category="product.category"
              :code="product.code"
              :price="product.price"
              :imageUrl="product.imageUrl"
              :type="product.type"
              @order="orderViaWA"
              class="flex-shrink-0 w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom scrollbar styling */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #504d43 #ffffff;
}

.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f5f0e0;
  border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background-color: #504d43;
  border-radius: 3px;
  cursor: pointer;
}

/* Smooth scroll behavior */
.scroll-smooth {
  scroll-behavior: smooth;
}
</style>