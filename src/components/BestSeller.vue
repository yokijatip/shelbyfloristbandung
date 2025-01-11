<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import HeadingSection from "./elements/text/HeadingSection.vue";
import handBouquet from "../assets/data/hand_bouquet.json"

const products = handBouquet.products
// Bagi products menjadi dua bagian
const firstHalf = products.slice(0, products.length / 2)
const secondHalf = products.slice(products.length / 2)

// Auto Scroll START
const topRowRef = ref(null)
const bottomRowRef = ref(null)
let topScrollInterval = null
let bottomScrollInterval = null

const startAutoScroll = () => {
  topScrollInterval = setInterval(() => {
    if (topRowRef.value) {
      topRowRef.value.scrollLeft += 1
      if (topRowRef.value.scrollLeft >= topRowRef.value.scrollWidth / 2) {
        topRowRef.value.scrollLeft = 0
      }
    }
  }, 20)

  bottomScrollInterval = setInterval(() => {
    if (bottomRowRef.value) {
      bottomRowRef.value.scrollLeft -= 1
      if (bottomRowRef.value.scrollLeft <= 0) {
        bottomRowRef.value.scrollLeft = bottomRowRef.value.scrollWidth / 2
      }
    }
  }, 20)
}

const stopAutoScroll = () => {
  clearInterval(topScrollInterval)
  clearInterval(bottomScrollInterval)
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
})
//   Auto Scroll End


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


    </div>
  </section>
</template>

<style scoped>
@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3)); /* Sesuaikan dengan jumlah set yang diduplikasi */
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 60s linear infinite;
}

/* Hover untuk pause */
.animate-infinite-scroll:hover {
  animation-play-state: paused;
}

/* Scrollbar styling tetap sama */
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
}
</style>