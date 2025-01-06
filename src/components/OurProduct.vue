<script setup></script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
<h1 class="text-4xl font-bold text-center my-12">Produk Kami</h1>

<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Kategori 1: Bouquet -->
      <div class="category-section">
        <h2 class="text-2xl font-semibold mb-4 text-center">Bouquet</h2>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/public/hero_image.png" 
            alt="Bunga Papan" 
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <p class="text-gray-600">Koleksi bunga papan untuk berbagai acara</p>
            <button class="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
              Lihat Semua
            </button>
          </div>
        </div>
      </div>

      <!-- Kategori 2: karangan bunga -->
      <div class="category-section">
        <h2 class="text-2xl font-semibold mb-4 text-center">Karangan Bunga</h2>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/public/hero_image.png" 
            alt="Bunga Meja" 
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <p class="text-gray-600">Rangkaian bunga segar untuk meja</p>
            <button class="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
              Lihat Semua
            </button>
          </div>
        </div>
      </div>

      <!-- Kategori 3: Hand Bouquet -->
      <div class="category-section">
        <h2 class="text-2xl font-semibold mb-4 text-center">Standing Flower</h2>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src="/public/hero_image.png" 
            alt="Hand Bouquet" 
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <p class="text-gray-600">Buket bunga untuk momen spesial</p>
            <button class="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors">
              Lihat Semua
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-section:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
