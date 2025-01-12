<script setup>

import TitleSection from "./elements/text/TitleSection.vue";
import HeadingSection from "./elements/text/HeadingSection.vue";
import SubTitleSection from "./elements/text/SubTitleSection.vue";
</script>

<template>
  <section class="py-8 ">
    <div>
      <div class="mx-auto px-2 md:px-4 lg:px-16">
        <SubTitleSection>
          Shelby Florist
        </SubTitleSection>
        <TitleSection class="text-center">Mengapa Harus memilih Kami?</TitleSection>
        <HeadingSection class="text-gray-600 max-w-2xl mx-auto">
          Temukan berbagai produk pilihan dengan kualitas terbaik untuk memenuhi
          kebutuhan Anda
        </HeadingSection>
      </div>

      <!--   Content   -->
      <div class="grid grid-cols-1 md:grid-cols-3 py-8">
        <!-- Item 1 -->
        <div class="flex flex-col items-center">
          <div class="w-64 aspect-square">
            <img
                src="/public/undraw_picture_lnem.svg"
                alt="Item 1"
                class="w-full h-full object-contain"
            >
          </div>
          <HeadingSection>
            Terpercaya
          </HeadingSection>
        </div>

        <!-- Item 2 -->
        <div class="flex flex-col items-center">
          <div class="w-64 aspect-square">
            <img
                src="/public/undraw_shopping-bags_nfsf.svg"
                alt="Item 2"
                class="w-full h-full object-contain"
            >
          </div>
          <HeadingSection>
            Harga Terjangkau
          </HeadingSection>
        </div>

        <!-- Item 3 -->
        <div class="flex flex-col items-center">
          <div class="w-64 aspect-square">
            <img
                src="/public/undraw_delivery-truck_mjui.svg"
                alt="Item 3"
                class="w-full h-full object-contain"
            >
          </div>
          <HeadingSection>
            Gratis Pengiriman
          </HeadingSection>
        </div>
      </div>


    </div>
  </section>
</template>

<style scoped>

</style>