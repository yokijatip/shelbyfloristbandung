<script setup>
import CommonButton from "./elements/button/CommonButton.vue";
</script>

<template>
  <section class="bg-beige">
    <div class="relative bg-beige max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Background Image untuk Mobile -->
      <div class="md:hidden absolute inset-0">
        <img
          src="https://res.cloudinary.com/dvffsa6kt/image/upload/v1736823975/hero2_pivvs6.jpg"
          alt="Hero Image"
          class="w-full h-full object-cover brightness-50 object-[60%]"
        />
      </div>

      <!-- Background Image dengan Arch (Desktop) -->
      <div
        class="md:absolute inset-0 md:flex justify-center items-center hidden"
      >
        <div
          class="relative md:w-[300px] md:h-[400px] xl:w-[400px] xl:h-[500px]"
        >
          <div class="absolute inset-0 md:rounded-t-[300px]"></div>
          <img
            src="https://res.cloudinary.com/dvffsa6kt/image/upload/v1736823975/hero2_pivvs6.jpg"
            alt="Hero Image"
            class="absolute inset-0 w-full h-full object-cover object-[70%] md:rounded-t-[200px] "
          />
        </div>
      </div>

      <!-- Content Container -->
      <div class="container mx-auto px-4 md:px-8 lg:px-16 relative">
        <!-- Mobile Layout -->
        <div class="md:hidden flex flex-col justify-evenly min-h-screen py-8">
          <!-- Mobile Content -->
          <div class="relative">
            <h1 class="text-4xl font-extrabold font-cormorant text-white mb-6">
              Bunga spesial
              <br />untuk anda
            </h1>
            <p class="text-white mb-8">
              Shelby Florist Bandung Memperkenalkan<br />
              Bunga Indah Untuk Momen Spesial Anda
            </p>
          </div>

          <!-- Mobile Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col items-center text-center">
              <div class="p-3 bg-white rounded">🌸</div>
              <div>
                <div class="text-xl font-semibold text-white">100+</div>
                <div class="text-xs text-white">Kind of flower</div>
              </div>
            </div>

            <div class="flex flex-col items-center text-center">
              <div class="p-3 bg-white rounded">✨</div>
              <div>
                <div class="text-xl font-semibold text-white">250+</div>
                <div class="text-xs text-white">Unique style</div>
              </div>
            </div>

            <div class="flex flex-col items-center text-center">
              <div class="p-3 bg-white rounded">⭐</div>
              <div>
                <div class="text-xl font-semibold text-white">1M</div>
                <div class="text-xs text-white">Happy customer</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Layout -->
        <div
          class="hidden md:flex justify-between items-start md:items-center min-h-screen md:flex-row"
        >
          <!-- Left Content for Desktop -->
          <div class="max-w-xl relative">
            <h1
              class="text-7xl font-extrabold font-cormorant text-darkBeige mb-6 text-nowrap"
            >
              Bunga spesial
              <br />untuk anda
            </h1>
            <p class="text-lightBeige mb-8 w-full">
              Shelby Florist Bandung Memperkenalkan<br />
              Bunga Indah Untuk Momen Spesial Anda
            </p>
          </div>

          <!-- Desktop Stats -->
          <div class="md:space-y-4 md:flex md:flex-col">
            <div
              class="flex md:flex-row flex-col items-center gap-4 p-0 md:p-4 rounded-lg"
            >
              <div class="p-3 bg-white rounded">🌸</div>
              <div>
                <div class="text-2xl font-semibold text-darkBeige">100+</div>
                <div class="text-sm text-darkBeige">Kind of flower</div>
              </div>
            </div>

            <div
              class="flex md:flex-row flex-col items-center gap-4 p-0 md:p-4 rounded-lg"
            >
              <div class="p-3 bg-white rounded">✨</div>
              <div>
                <div class="text-2xl font-semibold text-darkBeige">250+</div>
                <div class="text-sm text-darkBeige">Unique style</div>
              </div>
            </div>

            <div
              class="flex md:flex-row flex-col items-center gap-4 p-0 md:p-4 rounded-lg"
            >
              <div class="p-3 bg-white rounded">⭐</div>
              <div>
                <div class="text-2xl font-semibold text-darkBeige">1M</div>
                <div class="text-sm text-darkBeige">Happy customer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-img {
  object-position: center -20px; /* Menggeser gambar 20px ke kiri */
}
</style>
