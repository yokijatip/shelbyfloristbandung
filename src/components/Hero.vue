<script setup>
import { RouterLink } from "vue-router";

const phoneNumber = "6281904520743";
const message = "Hallo shelbyflorist Mau Pesan Bunga Buat Hari Ini";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-[#1a1208]">

    <!-- ══ BACKGROUND ══ -->
    <!-- Mobile BG -->
    <div class="md:hidden absolute inset-0 z-0">
      <img
        src="https://res.cloudinary.com/dvffsa6kt/image/upload/v1772043318/background-hero2_pqr3wp.jpg"
        alt="Background"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#f5f0e8]/95"></div>
    </div>

    <!-- Desktop BG -->
    <div class="hidden md:block absolute inset-0 z-0">
      <img
        src="https://res.cloudinary.com/dvffsa6kt/image/upload/v1772043318/background-hero_fygry3.jpg"
        alt="Background"
        class="w-full h-full object-cover object-[70%_35%]"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#f5f0e8]/80"></div>
    </div>

    <!-- ══ HERO CONTENT ══ -->
    <div class="relative z-10 min-h-screen flex flex-col justify-between pt-20 pb-0">

      <!-- MOBILE: teks di atas, stats di bawah -->
      <div class="md:hidden flex flex-col justify-between min-h-[calc(100vh-80px)] px-6 pb-0">
        <!-- Text block -->
        <div class="pt-6">
          <p class="font-dancing text-[#e8d5a3] text-2xl mb-1">Rangkaian Bunga</p>
          <h1 class="font-cormorant text-white text-5xl font-extrabold leading-tight mb-4">
            Eksklusif<br/>untuk Momen<br/>Istimewa Anda
          </h1>
          <div class="w-14 h-[2px] bg-[#c9a96e] mb-4"></div>
          <p class="text-white text-sm mb-2">Dirangkai dengan Presisi & Dikirim Tepat Waktu</p>
          <span class="inline-flex items-center gap-2 bg-[#c9a96e]/20 border border-[#c9a96e] rounded-full px-4 py-1.5 text-[#e8d5a3] text-xs mb-7">
            <span class="w-1.5 h-1.5 rounded-full bg-[#c9a96e] flex-shrink-0"></span>
            ke Seluruh Bandung & Sekitarnya
          </span>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-3">
            <a
              :href="whatsappUrl"
              target="_blank"
              class="flex items-center gap-2 bg-[#c9a96e] hover:bg-[#a07840] text-white rounded-full px-5 py-3 transition"
            >
              <svg viewBox="0 0 24 24" fill="white" class="w-5 h-5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.945 9.945 0 01-4.788-1.22L2.92 19.01l1.384-4.184A9.961 9.961 0 012.04 12C2.04 6.477 6.517 2 12.04 2c5.523 0 9.96 4.477 9.96 10s-4.477 10-10 10h-.011z"/>
              </svg>
              <div class="text-left leading-tight">
                <div class="font-bold text-sm">Pesan via WhatsApp</div>
                <div class="text-[11px] opacity-85">Respon Cepat</div>
              </div>
            </a>
            <RouterLink
              to="/AllProduct"
              class="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-full px-5 py-3 text-sm transition"
            >
              Lihat Koleksi →
            </RouterLink>
          </div>
        </div>

        <!-- Stats Bar (bottom floating card) -->
        <div class="mt-auto mx-[-24px]">
          <div class="bg-white rounded-t-3xl px-5 pt-5 pb-4 shadow-2xl">
            <!-- 3 stats -->
            <div class="flex justify-around mb-4">
              <div class="flex items-center gap-2">
                <span class="text-2xl">🌸</span>
                <div>
                  <div class="font-cormorant font-bold text-xl text-[#1a1208]">100+</div>
                  <div class="text-[11px] text-gray-500">Jenis Bunga</div>
                </div>
              </div>
              <div class="w-px bg-[#e8ddd0]"></div>
              <div class="flex items-center gap-2">
                <span class="text-2xl">✨</span>
                <div>
                  <div class="font-cormorant font-bold text-xl text-[#1a1208]">250+</div>
                  <div class="text-[11px] text-gray-500">Desain Unik</div>
                </div>
              </div>
              <div class="w-px bg-[#e8ddd0]"></div>
              <div class="flex items-center gap-2">
                <span class="text-2xl">⭐</span>
                <div>
                  <div class="font-cormorant font-bold text-xl text-[#1a1208]">1.000+</div>
                  <div class="text-[11px] text-gray-500">Pelanggan Puas</div>
                </div>
              </div>
            </div>
            <!-- Badges -->
            <div class="flex justify-around border-t border-[#ece8e0] pt-3">
              <span class="flex items-center gap-1.5 text-[11px] text-gray-600">
                <span class="w-4 h-4 rounded-full bg-[#c9a96e] text-white flex items-center justify-center text-[9px] flex-shrink-0">✓</span>
                100% Fresh
              </span>
              <span class="flex items-center gap-1.5 text-[11px] text-gray-600">
                <span class="w-4 h-4 rounded-full bg-[#c9a96e] text-white flex items-center justify-center text-[9px] flex-shrink-0">✓</span>
                Pengiriman Cepat
              </span>
              <span class="flex items-center gap-1.5 text-[11px] text-gray-600">
                <span class="w-4 h-4 rounded-full bg-[#c9a96e] text-white flex items-center justify-center text-[9px] flex-shrink-0">✓</span>
                Custom Request
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- DESKTOP LAYOUT -->
      <div class="hidden md:flex items-end justify-between min-h-[calc(100vh-80px)] max-w-7xl mx-auto px-10 lg:px-16 w-full">

        <!-- Left: Text -->
        <div class="max-w-lg pb-16">
          <p class="font-dancing text-[#e8d5a3] text-2xl lg:text-3xl mb-1">Rangkaian Bunga</p>
          <h1 class="font-cormorant text-white text-6xl lg:text-7xl font-extrabold leading-tight mb-5">
            Eksklusif<br/>untuk Momen<br/>Istimewa Anda
          </h1>
          <div class="w-16 h-[2px] bg-[#c9a96e] mb-5"></div>
          <p class="text-white/80 text-sm mb-3">Dirangkai dengan Presisi & Dikirim Tepat Waktu</p>
          <span class="inline-flex items-center gap-2 bg-[#c9a96e]/20 border border-[#c9a96e] rounded-full px-4 py-1.5 text-[#e8d5a3] text-xs mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-[#c9a96e] flex-shrink-0"></span>
            ke Seluruh Bandung & Sekitarnya
          </span>

          <div class="flex flex-wrap gap-3">
            <a
              :href="whatsappUrl"
              target="_blank"
              class="flex items-center gap-3 bg-[#c9a96e] hover:bg-[#a07840] text-white rounded-full px-6 py-3.5 transition shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="white" class="w-5 h-5 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.945 9.945 0 01-4.788-1.22L2.92 19.01l1.384-4.184A9.961 9.961 0 012.04 12C2.04 6.477 6.517 2 12.04 2c5.523 0 9.96 4.477 9.96 10s-4.477 10-10 10h-.011z"/>
              </svg>
              <div class="text-left leading-tight">
                <div class="font-bold text-sm">Pesan via WhatsApp</div>
                <div class="text-[11px] opacity-85">Respon Cepat</div>
              </div>
            </a>
            <RouterLink
              to="/AllProduct"
              class="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-full px-6 py-3.5 text-sm transition"
            >
              Lihat Koleksi →
            </RouterLink>
          </div>
        </div>

        <!-- Right: Stats Vertical + Stats Bar -->
        <div class="flex flex-col items-end gap-4 pb-16">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3">
              <span class="text-2xl">🌸</span>
              <div>
                <div class="font-cormorant font-bold text-2xl text-white">100+</div>
                <div class="text-xs text-white/70">Jenis Bunga</div>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3">
              <span class="text-2xl">✨</span>
              <div>
                <div class="font-cormorant font-bold text-2xl text-white">250+</div>
                <div class="text-xs text-white/70">Desain Unik</div>
              </div>
            </div>
            <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3">
              <span class="text-2xl">⭐</span>
              <div>
                <div class="font-cormorant font-bold text-2xl text-white">1.000+</div>
                <div class="text-xs text-white/70">Pelanggan Puas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: Bottom Stats Bar -->
      <div class="hidden md:block w-full">
        <div class="max-w-7xl mx-auto px-10 lg:px-16">
          <div class="bg-white rounded-t-3xl px-8 py-5 flex items-center justify-between shadow-2xl">
            <div class="flex items-center gap-10">
              <span class="flex items-center gap-2 text-sm text-gray-600">
                <span class="w-5 h-5 rounded-full bg-[#c9a96e] text-white flex items-center justify-center text-[10px] flex-shrink-0">✓</span>
                100% Fresh
              </span>
              <span class="flex items-center gap-2 text-sm text-gray-600">
                <span class="w-5 h-5 rounded-full bg-[#c9a96e] text-white flex items-center justify-center text-[10px] flex-shrink-0">✓</span>
                Pengiriman Cepat
              </span>
              <span class="flex items-center gap-2 text-sm text-gray-600">
                <span class="w-5 h-5 rounded-full bg-[#c9a96e] text-white flex items-center justify-center text-[10px] flex-shrink-0">✓</span>
                Bisa Custom Request
              </span>
            </div>
            <RouterLink
              to="/AllProduct"
              class="text-sm font-semibold text-[#c9a96e] hover:text-[#a07840] transition"
            >
              Lihat Semua Koleksi →
            </RouterLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Font Dancing Script perlu ditambahkan di tailwind.config.js atau index.css */
/* Tambahkan di index.css:
   @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap');
   Dan di tailwind.config.js tambahkan:
   fontFamily: { dancing: ['"Dancing Script"', 'cursive'] }
*/
</style>
