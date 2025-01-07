<script setup>
import {onMounted, onUnmounted, ref} from "vue";
import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import HeadingSection from "./elements/text/HeadingSection.vue";


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


const bestSellers = [
  {
    id: 1,
    name: "White Rose Bouquet",
    image: "https://down-id.img.susercontent.com/file/d8b7e890630548a8abf772f8cbe3e405",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 2,
    name: "Red Rose Bouquet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_wTXdNt5f93AyKIRPVgrawctACKBum-w3Q&s",
    subTitle: "Birthday Special",
    price: "850.000",

  },
  {
    id: 3,
    name: "Pink Tulip Arrangement",
    image: "https://i.pinimg.com/736x/07/03/24/0703248d0d184d65d0b361e3b5b23d21.jpg",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 4,
    name: "Sunflower Basket",
    image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/8/10c119fa-ed8e-465a-a43e-5dfba5be6aba.jpg",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 5,
    name: "Orchid Vase",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzt1sVEHGCeRMh9Z9zvw1sRnqJXSfcw13ltw&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 6,
    name: "Lavender Basket",
    image: "https://media.istockphoto.com/id/501027375/photo/basket-of-lavender.jpg?s=612x612&w=0&k=20&c=ziFazjDWmE338n-qcOPCjVCYWDsaNgVF5bfbuEdHrpM=",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 7,
    name: "Daisy Mixed Bouquet",
    image: "https://www.salamagreenhouse.com/cdn/shop/products/mixed_daisy_grande.jpg?v=1391039243",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 8,
    name: "Carnation Bouquet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLkHFm8HNRZqPOGM2bHER6Cwwfjohce_HZQ&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 9,
    name: "Peony Basket",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-UurIn_X0bhFls4zOCOl4dBBVAY-n1A3SQ&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 10,
    name: "Calla Lily Arrangement",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgyKLzqfzPQCL_htyG_fcchcO1PaM345NTw&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 11,
    name: "Mixed Seasonal Flowers",
    image: "https://olliesbloomsandplants.com.au/cdn/shop/products/WeeklyBloomSpecialFlowersPink2.jpg?v=1639559584",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 12,
    name: "Hydrangea Bouquet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9m1YlQq1IBzEluagG2nMnI1EICaDjORUBw&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 13,
    name: "Yellow Lily Bouquet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rEomIGQzRx_eooHpf83cCOGUkH-ismAneQ&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 14,
    name: "Pastel Roses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb0rHdBuOhCjIeSIT0aBrqhB8uZ8HPKuaqlQ&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 15,
    name: "Cherry Blossom Vase",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8R1q_dbfWIgvbx1_jUmGr8Y18D32q1oT4_w&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 16,
    name: "Marigold Garland",
    image: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/10/8317803c-766b-4c10-bcfa-4052b2134a0d.jpg",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 17,
    name: "Exotic Flower Arrangement",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjEMXr-erHjB6jphsjPNcvqtl6xaOLCmCFQ&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 18,
    name: "Romantic Rose Box",
    image: "https://vipfloral.com/wp-content/uploads/2024/01/IMG_8212.jpg",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 19,
    name: "Blue Orchid Vase",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77qBVEHoSoXF0k8oOxGIOczjo0HzyYsUTWA&s",
    subTitle: "Birthday Special",
    price: "850.000",
  },
  {
    id: 20,
    name: "Garden Fresh Mixed Bouquet",
    image: "https://enjoyflowers.com/cdn/shop/products/FFM1.jpg?v=1649796341&width=416",
    subTitle: "Birthday Special",
    price: "850.000",
  },
];


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
      <!-- Scrollable 2-Column Grid -->
      <!-- Scrollable Rows -->
      <div class="space-y-8">
        <!-- Top Row -->
        <div class="overflow-x-auto group">
          <div class="flex gap-8 pb-6 animate-scroll group-hover:pause-animation">
            <div v-for="item in [...bestSellers.slice(0, 10), ...bestSellers.slice(0, 10)]" :key="item.id"
                 class="w-40 md:w-72 flex-shrink-0 bg-white rounded-lg">
              <img :src="item.image" :alt="item.name"
                   class="w-full h-40 md:h-72 object-cover">
              <div class="p-4">
                <h3 class="font-cormorant text-xl font-bold text-darkBeige">{{ item.name }}</h3>
                <p class="text-sm text-lightBeige">{{ item.subTitle }}</p>
                <p class="text-darkBeige font-semibold mt-2">Rp {{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Row -->
        <div class="overflow-x-auto group">
          <div class="flex gap-8 pb-6 animate-scroll-reverse group-hover:pause-animation">
            <div v-for="item in [...bestSellers.slice(10, 20), ...bestSellers.slice(10, 20)]" :key="item.id"
                 class="w-40 md:w-72 flex-shrink-0 bg-white rounded-lg">
              <img :src="item.image" :alt="item.name"
                   class="w-full h-40 md:h-72 object-cover">
              <div class="p-4">
                <h3 class="font-cormorant text-xl font-bold text-darkBeige">{{ item.name }}</h3>
                <p class="text-sm text-lightBeige">{{ item.subTitle }}</p>
                <p class="text-darkBeige font-semibold mt-2">Rp {{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom scrollbar styling */
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll-reverse {
  animation: scroll-reverse 30s linear infinite;
}

.group:hover .pause-animation {
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