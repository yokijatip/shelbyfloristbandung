<script setup>
import CommonButton from "./elements/button/CommonButton.vue";
import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
</script>

<template>
  <section id="ourProduct" class="min-h-screen px-8 max-w-7xl mx-auto bg-white py-8 md:pt-16 md:px-0 lg:px-7 xl:px-32">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <SubTitleSection class="text-start">
          Produk Kami
        </SubTitleSection>
        <TitleSection class="text-start">
          Bunga indah kami sediakan<br/>jangan sampai ketinggalan!
        </TitleSection>
      </div>
      <div>
        <p class="md:mt-12 mt-2 text-slate-500">
          Kami Memahami Bahwa Mencari Bunga Yang tepat Untuk Momen Spesial Anda
          Bisa Menjadi Tantangan. Oleh Karena Itu, Kami Ingin Memperkenalkan
          Penawaran Bunga Spesial Dari Shelby Florist Yang Akan Membuat Momen
          Anda Semakin Berkesan.
        </p>

        <CommonButton class="btn bg-darkBeige text-white rounded-none mb-20 mt-4">
          Lihat Semua
        </CommonButton>
      </div>
    </div>

    

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      <!-- Kategori 1: Bouquet -->
      <div class="category-section">
        <div class="overflow-hidden h-80 ">
          <img
              src="https://m.media-amazon.com/images/I/61F7fu4cFQL._AC_UF1000,1000_QL80_.jpg"
              alt="Bunga Papan"
              class="inset-0 w-full h-full object-cover md:rounded-t-[200px] rounded-t-[200px]"
          />
        </div>
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-4 text-center font-cormorant">
            Bouquet
          </h2>
        </div>
      </div>

      <!-- Kategori 2: karangan bunga -->
      <div class="category-section">
        <div class="overflow-hidden h-80">
          <img
              src="https://smesta.kemenkopukm.go.id/storage/company/0093fe2eedeb098315bf9251da1a5f03/product/images/PbYnr6CVk8E0pfhnNhn7FnSr4l8w8NASEhsWzZgM.jpg"
              alt="Bunga Meja"
              class="inset-0 w-full h-full object-cover md:rounded-t-[200px] rounded-t-[200px]"
          />
        </div>
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-4 text-center font-cormorant">
            Karangan Bunga
          </h2>
        </div>
      </div>

      <!-- Kategori 3: standing flower -->
      <div class="category-section">
        <div class="overflow-hidden h-80">
          <img
              src="https://jefeflower.com/wp-content/uploads/2020/04/IMG_20191227_143142_508-1-scaled.jpg"
              alt="Hand Bouquet"
              class="inset-0 w-full h-full object-cover md:rounded-t-[200px] rounded-t-[200px]"
          />
        </div>
        <div class="p-4">
          <h2 class="text-2xl font-semibold mb-4 text-center font-cormorant">
            Standing Flower
          </h2>
        </div>
      </div>
    </div>

    <!-- Gambar Variasi-->
     <div class="relative">
     <img
      src="/public/variasi.png"
      alt="Left Corner SVG"
      class="absolute h-80 -bottom-10 -left-40 md:-bottom-10 md:-left-64 rotate-45 md:w-80 md:h-80"
    />
  </div>
  </section>


</template>


<style scoped>
.category-section:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}
</style>
