<script setup>
import TitleSection from './elements/text/TitleSection.vue';
import CommonButton from './elements/button/CommonButton.vue';
import HeadingSection from './elements/text/HeadingSection.vue';
import SubTitleSection from './elements/text/SubTitleSection.vue';

// whatsapp
const phoneNumber = '6281904520743';
const message = 'Hallo shelbyflorist Mau Pesan Bunga Buat Hari Ini';

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;
</script>

<template>
  <section id="aboutUs" class="flex flex-col gap-12 pb-12 mb-12 bg-beige">
    <div class="flex flex-col gap-8 md:gap-12">
      <!-- Top Section -->
      <div
        class="overlay-bg bg-cover bg-center bg-no-repeat flex items-start py-8 md:py-12"
        style="background-image: url('/image-aboutus.png')"
      >
        <div
          class="relative z-10 max-w-0xl px-8 items-center md:px-0 py-8 max-w-7xl lg:px-7 xl:px-32"
        >
          <TitleSection class="text-white text-start">
            Tekan Tombol Pesan<br />Sekarang
          </TitleSection>

          <CommonButton class="mt-12 bg-white">
            <a
              :href="whatsappUrl"
              target="_blank"
              class="px-8 text-darkBeige font-semibold"
            >
              Pesan
            </a>
          </CommonButton>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="flex flex-col md:flex-row px-8 max-w-7xl mx-auto md:px-0 lg:px-7 xl:px-32 items-center justify-center"
      >
        <!-- Text -->
        <div class="">
          <!-- Title -->
          <div>
            <SubTitleSection class="text-start">
              Shelby Florist
            </SubTitleSection>
            <TitleSection class="text-start">
              Toko Bunga Terbaik di Bandung, Indonesia
            </TitleSection>
            <div class="text-gray-600 leading-relaxed my-6 mt-12">
              <p>
                Mengirimkan bunga bukan hanya sekedar kata-kata yang diucapkan,
                namun juga perbuatan yang bisa merasakan kebahagiaan dari orang
                tersayang.
              </p>

              <p>
                Terimakasih telah memilih Shelby Florist sebagai tujuan Anda
                untuk kebutuhan bunga, Kami berharap dapat terus melayani Anda
                dan menciptakan momen berharga melalui keindahan bunga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overlay-bg {
  position: relative;
}

.overlay-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.4
  ); /* 0.4 adalah opacity, bisa disesuaikan */
}
</style>
