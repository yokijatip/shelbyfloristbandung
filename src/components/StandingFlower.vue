<script setup>

import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import CommonButton from "./elements/button/CommonButton.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class=" mx-auto lg:pb-8  md:ps-0 pb-16 md:py-12">

    <div class="flex flex-col lg:flex-row gap-8 pe-0 md:pe-8">
      <!-- Text Content - akan muncul di atas pada mobile -->
      <div class="lg:order-last lg:w-1/3 mb-4 lg:mb-0 ps-8">
        <div class="lg:pl-8">
          <SubTitleSection class="text-start">
            Standing Flower
          </SubTitleSection>
          <TitleSection class="text-start md:mb-12">
            Hiasan bunga disegala situasi
          </TitleSection>
          <p class="text-gray-600 leading-relaxed my-6">
            We're passionate about capturing the essence of your unique love story and turning it into a timeless
            collection
            of photographs. From your initial engagement to your eagerly anticipated wedding day, we are committed to
            preserving every precious moment along the way.
          </p>
          <CommonButton>
            <RouterLink to="/StandingFlower"> Lihat Semua </RouterLink>
          </CommonButton>
        </div>
      </div>

      <!-- Images Container -->
      <div class="lg:w-2/3 grid grid-cols-2 gap-4 pe-8">
        <div class="aspect-[4/5] overflow-hidden">
          <img
              src="https://filebroker-cdn.lazada.co.id/kf/S36e4083e666341b5925a58268e419367k.jpg"
              alt="Wedding couple in desert landscape"
              class="w-full h-full object-cover"
          />
        </div>
        <div class="aspect-[4/5] overflow-hidden">
          <img
              src="https://www.marutiflorist.com/wp-content/uploads/2023/09/INV-3035-Standing-Flower1.jpg"
              alt="Wedding couple with trees"
              class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>