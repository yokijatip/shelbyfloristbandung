<script setup>

import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import CommonButton from "./elements/button/CommonButton.vue";
</script>

<template>
  <div class="container mx-auto lg:pb-8 ps-8 md:ps-8 pb-16 md:py-12">

    <div class="flex flex-col lg:flex-row gap-8 pe-0 md:pe-8">
      <!-- Text Content - akan muncul di atas pada mobile -->
      <div class="lg:order-last lg:w-1/3 mb-4 lg:mb-0">
        <div class="lg:pl-8">
          <SubTitleSection class="text-start">
            Bouquet
          </SubTitleSection>
          <TitleSection class="text-start md:mb-12">
            Wedding & Engagement
          </TitleSection>
          <p class="text-gray-600 leading-relaxed mb-6">
            We're passionate about capturing the essence of your unique love story and turning it into a timeless
            collection
            of photographs. From your initial engagement to your eagerly anticipated wedding day, we are committed to
            preserving every precious moment along the way.
          </p>
          <CommonButton>
            Lihat Semua
          </CommonButton>
        </div>
      </div>

      <!-- Images Container -->
      <div class="lg:w-2/3 grid grid-cols-2 gap-4 ps-0">
        <div class="aspect-[4/5] overflow-hidden">
          <img
              src="https://luckybirdphoto.com/wp-content/uploads/2022/01/Amanda-Zac129-1024x684.jpg.webp"
              alt="Wedding couple in desert landscape"
              class="w-full h-full object-cover"
          />
        </div>
        <div class="aspect-[4/5] overflow-hidden">
          <img
              src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt19prodlp/products/p-floral-enchantment-bouquet-132891-m.jpg"
              alt="Wedding couple with trees"
              class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>