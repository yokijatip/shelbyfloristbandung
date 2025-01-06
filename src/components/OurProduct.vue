<script setup></script>

<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 class="text-4xl font-bold mt-12 font-cormorant text-center md:text-start">Produk Kami</h1>
        <p class="font-poppins text-slate-500">
          Bunga untuk momen spesial anda, jangan sampai ketinggalan!
        </p>
      </div>
      <div>
        <p class="md:mt-12 mt-2 font-poppins text-slate-500">
          Kami Memahami Bahwa Mencari Bunga Yang tepat Untuk Momen Spesial Anda Bisa Menjadi Tantangan. Oleh Karena Itu, Kami Ingin Memperkenalkan Penawaran Bunga Spesial Dari Shelby Florist Yang Akan Membuat Momen Anda Semakin Berkesan.
        </p>
        <button
          class="bg-darkBeige text-white text-center rounded-lg font-poppins py-2 px-4 mb-8 mt-4"
        >
          Lihat Semua
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Kategori 1: Bouquet -->
      <div class="category-section">
        <div class="overflow-hidden">
          <img
            src="/public/hero_image.png"
            alt="Bunga Papan"
            class="inset-0 w-full h-full object-cover md:rounded-t-[200px] "
          />
          <div class="p-4">
            <h2 class="text-2xl font-semibold mb-4 text-center font-cormorant">
              Bouquet
            </h2>
          </div>
        </div>
      </div>

      <!-- Kategori 2: karangan bunga -->
      <div class="category-section">
        <div class="overflow-hidden">
          <img
            src="/public/hero_image.png"
            alt="Bunga Meja"
            class="inset-0 w-full h-full object-cover md:rounded-t-[200px] "
          />
          <div class="p-4">
            <h2 class="text-2xl font-semibold mb-4 text-center font-cormorant">
              Karangan Bunga
            </h2>
          </div>
        </div>
      </div>

      <!-- Kategori 3: standing flower -->
      <div class="category-section">
        <div class=" overflow-hidden">
          <img
            src="/public/hero_image.png"
            alt="Hand Bouquet"
            class="inset-0 w-full h-full object-cover md:rounded-t-[200px] "
          />
          <div class="p-4">
            <h2 class="text-2xl font-semibold mb-4 text-center font-cormorant">
              Standing Flower
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  >
</template>

<style scoped>
.category-section:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
