<script scoped>

import {defineComponent} from "vue";
import TitleSection from "./elements/text/TitleSection.vue";
import SubTitleSection from "./elements/text/SubTitleSection.vue";
import CommonButton from "./elements/button/CommonButton.vue";

export default defineComponent({
  components: {CommonButton, SubTitleSection, TitleSection}
})
</script>

<template>
  <div class=" mx-auto lg:pb-8 pb-16 md:py-12 text-end">
    
    <div class="flex flex-col lg:flex-row gap-8 ps-8">
      <!-- Text Content - akan muncul di atas pada mobile -->
      <div class=" lg:w-1/3 mb-8 lg:mb-0 pe-8">
        <div class="lg:pl-8">
          <SubTitleSection class="text-end">
            Karangan Bunga
          </SubTitleSection>
          <TitleSection class="text-end md:mb-12">
            Ucapan Selamat & Suka Cita
          </TitleSection>
          <p class="text-gray-600 leading-relaxed my-6 text-end">
            We're passionate about capturing the essence of your unique love story and turning it into a timeless collection 
            of photographs. From your initial engagement to your eagerly anticipated wedding day, we are committed to 
            preserving every precious moment along the way.
          </p>
          <CommonButton>
            Lihat Semua
          </CommonButton>
        </div>
      </div>

      <!-- Images Container -->
      <div class="lg:w-2/3 grid grid-cols-2 gap-4 pe-0">
        <div class="aspect-[4/5] overflow-hidden">
          <img 
            src="https://awsimages.detik.net.id/community/media/visual/2024/10/27/bem-fisip-unair-dibekukan-karena-mengirim-karangan-bunga-kritik-pelantikan-prabowo-gibran.jpeg?w=600&q=90"
            alt="Wedding couple in desert landscape" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="aspect-[4/5] overflow-hidden">
          <img 
            src="https://tokobungakendal.com/wp-content/uploads/2023/03/Karangan-Bunga-Congratulation-Botol-Shop.jpg"
            alt="Wedding couple with trees" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>