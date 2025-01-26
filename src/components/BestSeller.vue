<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import HeadingSection from "./elements/text/HeadingSection.vue";
import Product from "./card/Product.vue";
import handBouquet from "../assets/data/hand_bouquet.json";
import tableBouquet from "../assets/data/table_bouquet.json";
import KBdukaCita from "../assets/data/karangan_bunga_duka_cita.json";
import KBselamatSukses from "../assets/data/karangan_bunga_selamat_dan_sukses.json";
import KBhappyWedding from "../assets/data/karangan_bunga_happy_wedding.json";

const products = [
  ...handBouquet.products,
  ...tableBouquet.products,
  ...KBdukaCita.products,
  ...KBhappyWedding.products,
  ...KBselamatSukses.products,
];

const bestsellers = products.filter((product) => product.bestseller);
// Bagi products menjadi dua bagian
// Bagi products menjadi dua bagian seimbang
const firstHalf = bestsellers.slice(0, Math.ceil(bestsellers.length / 2));
const secondHalf = bestsellers.slice(Math.ceil(bestsellers.length / 2));

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
// Fungsi scroll manual dengan button
const scrollLeftAtas = () => {
  topRowRef.value.scrollLeft -= 300;
};

const scrollRightAtas = () => {
  topRowRef.value.scrollLeft += 300;
};

const scrollLeftBawah = () => {
  bottomRowRef.value.scrollLeft -=300;
}
const scrollRightBawah = ()=>{
  bottomRowRef.value.scrollLeft += 300
}



const orderViaWA = (product) => {
  const message = `Halo Admin, saya ingin memesan *${product.category}* kode *${product.code}* `;
  const whatsappUrl = `https://wa.me/6281904520743?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};

</script>

<template>
  <section class="bg-white">
    <div
      class="min-h-screen max-w-0xl mx-auto px-0 sm:px-6 lg:px-0 bg-white py-8"
    >
      <!--  Title  -->
      <div class="flex flex-col mb-8 md:mb-16 px-8">
        <SubTitleSection> Produk best seller </SubTitleSection>
        <TitleSection>
          Top Bouquet, Karangan Bunga & Standing Flower
        </TitleSection>
        <HeadingSection>
          Produk yang kami tawarkan berkualitas, indah sehingga memenuhi
          kebutuhan anda
        </HeadingSection>
      </div>

      <!--  Best Seller Content  -->
      <div class="space-y-8">
        <!-- Top Row -->
         <div class="relative">
        <div
          ref="topRowRef"
          @wheel="(e) => handleWheel(e, topRowRef)"
          class=" overflow-x-auto scroll-smooth group"
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
        <button  @click="scrollLeftAtas" class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 ml-4 bg-black/40 text-white rounded-full text-xl">&lt;</button>
        <button  @click="scrollRightAtas" class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 mr-4 bg-black/40 text-white rounded-full text-xl">&gt;</button>
        </div>

        <!-- Bottom Row -->
         <div class="relative">
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
        <!-- Scroll Buttons -->
        <button 
          @click="scrollLeftBawah" class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 ml-4 bg-black/40 text-white rounded-full text-xl">&lt;</button>
        <button 
          @click="scrollRightBawah" class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 mr-4 bg-black/40 text-white rounded-full text-xl">&gt;</button>
          
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom scrollbar styling */
.overflow-x-auto {
  scrollbar-width: thin;
  scrollbar-color: #e2ba09 #504d43;
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
