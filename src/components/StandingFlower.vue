<script setup>

import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import CommonButton from "./elements/button/CommonButton.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="bg-white mx-auto lg:pb-8  md:ps-0 pb-16 md:py-12">

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
            Kami dengan sepenuh hati menghadirkan standing flower yang memancarkan keindahan dan kesan elegan untuk setiap momen spesial Anda. Baik untuk merayakan kebahagiaan, menyampaikan penghormatan, atau mempercantik suasana, rangkaian bunga kami dirancang untuk menciptakan kehangatan dan makna di setiap kesempatan.
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
              src="https://res.cloudinary.com/dvffsa6kt/image/upload/v1736779984/sfhome_aeuibr.jpg"
              alt="Wedding couple in desert landscape"
              class="w-full h-full object-cover"
          />
        </div>
        <div class="aspect-[4/5] overflow-hidden">
          <img
              src="https://res.cloudinary.com/dvffsa6kt/image/upload/v1736779983/sfhome2_sdorhd.jpg"
              alt="Wedding couple with trees"
              class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>