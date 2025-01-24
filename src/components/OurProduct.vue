<script setup>
import CommonButton from "./elements/button/CommonButton.vue";
import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    id="ourProduct"
    class="min-h-screen px-8 max-w-7xl mx-auto bg-white md:pt-16 md:px-0 lg:px-7 xl:px-32"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <SubTitleSection class="text-start"> Produk Kami </SubTitleSection>
        <TitleSection class="text-start">
          Bunga indah kami sediakan<br />jangan sampai ketinggalan!
        </TitleSection>
      </div>
      <div>
        <p class="md:mt-12 mt-2 text-slate-500">
          Kami Memahami Bahwa Mencari Bunga Yang tepat Untuk Momen Spesial Anda
          Bisa Menjadi Tantangan. Oleh Karena Itu, Kami Ingin Memperkenalkan
          Penawaran Bunga Spesial Dari Shelby Florist Yang Akan Membuat Momen
          Anda Semakin Berkesan.
        </p>

        <CommonButton
          class="btn bg-darkBeige text-white rounded-none mb-20 mt-4"
        >
          <RouterLink to="/AllProduct"> Lihat Semua </RouterLink>
        </CommonButton>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      <!-- Kategori 1: Bouquet -->
      <RouterLink to="/Bouquet">
        <div class="category-section">
          <div class="overflow-hidden h-80">
            <img
              src="https://res.cloudinary.com/dvffsa6kt/image/upload/v1736363161/850_jvoztc.jpg"
              alt="Bunga Papan"
              class="inset-0 w-full h-full object-cover md:rounded-t-[200px] rounded-t-[200px] border-[1px] border-darkBeige"
            />
          </div>
          <div class="p-4">
            <h2 class="text-2xl font-semibold mb-4 text-center font-cormorant">
              Bouquet
            </h2>
          </div>
        </div>
      </RouterLink>

      <!-- Kategori 2: karangan bunga -->
      <RouterLink to="/KaranganBunga">
        <div class="category-section">
          <div class="overflow-hidden h-80">
            <img
              src="https://res.cloudinary.com/dvffsa6kt/image/upload/v1736504992/1000_i2ttzu.jpg"
              alt="Karangan Bunga"
              class="inset-0 w-full h-full object-cover md:rounded-t-[200px] rounded-t-[200px] border-[1px] border-darkBeige"
            />
          </div>
          <div class="p-4">
            <h2 class="text-2xl font-semibold mb-4 text-center font-cormorant">
              Karangan Bunga
            </h2>
          </div>
        </div>
      </RouterLink>

      <!-- Kategori 3: standing flower -->
      <RouterLink to="/StandingFlower">
        <div class="category-section">
          <div class="overflow-hidden h-80">
            <img
              src="https://res.cloudinary.com/dvffsa6kt/image/upload/v1736576826/sf900_tqozqj.jpg"
              alt="Standing Flower"
              class="inset-0 w-full h-full object-cover md:rounded-t-[200px] rounded-t-[200px] border-[1px] border-darkBeige"
            />
          </div>
          <div class="p-4">
            <h2 class="text-2xl font-semibold mb-4 text-center font-cormorant">
              Standing Flower
            </h2>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.category-section:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
