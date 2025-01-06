<script setup>

</script>

<template>
  <section class="relative min-h-screen bg-beige"> <!-- Background color sesuaikan -->
    <!-- Background Image dengan Arch -->
    <div class="absolute inset-0 flex justify-center items-center">
      <div class="relative
              w-[200px] h-[300px]
              md:w-[300px] md:h-[400px]
              xl:w-[400px] xl:h-[500px]">
        <div class="absolute inset-0 md:rounded-t-[300px]"></div>
        <img
            src="/public/hero_image.png"
            alt="Hero Image"
            class="absolute inset-0 w-full h-full object-cover
               rounded-full md:rounded-t-[300px]"
        />
      </div>
    </div>

    <!-- Content Container -->
    <div class="container mx-auto px-4 md:px-8 lg:px-16 relative">
      <div class="flex justify-between items-start md:items-center min-h-screen flex-col md:flex-row ">
        <!-- Left Content -->
        <div class="max-w-xl">
          <h1 class="text-4xl md:text-7xl lg:text-7xl font-extrabold font-cormorant text-darkBeige mb-6 text-wrap md:text-nowrap">
            Perfect gifts
            <br>for you
          </h1>
          <p class="text-lightBeige mb-8 w-full">
            Shelby Florist Bandung Memperkenalkan<br>Bunga Indah Untuk Momen Spesial Anda
          </p>
          <div class="flex gap-4">
            <button class="btn bg-darkBeige text-white hover:bg-opacity-90 rounded-none">
              Get Started Now
            </button>
            <button class="btn btn-ghost text-[#4F583D] rounded-none">
              How it works →
            </button>
          </div>
        </div>

        <!-- Right Stats -->
        <div class="space-y-6 md:space-y-4">
          <div class="flex items-center gap-4 p-4 rounded-lg">
            <div class="p-3 bg-white rounded">🌸</div>
            <div>
              <div class="text-2xl font-semibold text-darkBeige">290</div>
              <div class="text-sm text-darkBeige">Kind of flower</div>
            </div>
          </div>

          <div class="flex items-center gap-4 p-4 rounded-lg">
            <div class="p-3 bg-white rounded">✨</div>
            <div>
              <div class="text-2xl font-semibold text-darkBeige">500+</div>
              <div class="text-sm text-darkBeige">Unique style</div>
            </div>
          </div>

          <div class="flex items-center gap-4  p-4 rounded-lg">
            <div class="p-3 bg-white rounded">⭐</div>
            <div>
              <div class="text-2xl font-semibold text-darkBeige">1M</div>
              <div class="text-sm text-darkBeige">Happy customer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>