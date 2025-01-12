<script setup>
// Import yang diperlukan
import 'leaflet/dist/leaflet.css'
import {LMap, LMarker, LTileLayer} from '@vue-leaflet/vue-leaflet'
import {onMounted, ref} from 'vue'
import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import HeadingSection from "./elements/text/HeadingSection.vue";
import HeadingSectionContactUs from "./elements/text/HeadingSectionContactUs.vue";

const center = ref([-6.914744, 107.608238])
const zoom = ref(20)
const mapOptions = ref({
  zoomControl: true
})

// Pindahkan konfigurasi icon ke onMounted
onMounted(() => {
  // Dynamically import leaflet icon
  import('leaflet').then((L) => {
    // Fix untuk icon marker
    delete L.Icon.Default.prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconUrl: '/marker-icon.png',
      iconRetinaUrl: '/marker-icon-2x.png',
      shadowUrl: '/marker-shadow.png',
    })
  })
})
</script>

<template>
  <div  class="bg-darkBeige">
    <section id="contactUs" class="px-8 max-w-7xl mx-auto md:mt-16 py-8 md:py-16 md:px-0 lg:px-7 xl:px-32">
      <div class="max-w-7xl mx-auto sm:px-6">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <SubTitleSection class="text-white">
            Contact us
          </SubTitleSection>
          <TitleSection class="text-white">
            Ayo Datang ke Toko Kami
          </TitleSection>
        </div>

        <div class="flex flex-col lg:flex-row gap-8 md:items-center">
          <!-- Contact Info -->
          <div class="lg:w-1/3 space-y-8">
            <div>
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-white rounded">
                  <svg class="w-6 h-6 text-darkBeige" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <HeadingSectionContactUs class="text-beige text-start">
                    Alamat
                  </HeadingSectionContactUs>
                </div>
              </div>
              <p class="text-white text-lg">
                Jl.Pasirluyu Selatan, Pasirluyu<br>
                Kec.Regol, Kota Bandung, Jawa Barat<br>
                40254 Indonesia
              </p>
            </div>

            <div>
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-white rounded">
                  <svg class="w-6 h-6 text-darkBeige" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <HeadingSectionContactUs class="text-beige text-start">
                    Jam Operasional
                  </HeadingSectionContactUs>
                </div>
              </div>
              <p class="text-white text-lg">
                <p>Senin - Jumat: 08.00 - 21.00</p>
                <p>Sabtu - Minggu: 09.00 - 20.00</p>
              </p>
            </div>

            <div>
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-white rounded">
                  <svg class="w-6 h-6 text-darkBeige" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <HeadingSectionContactUs class="text-beige text-start">
                    Kontak
                  </HeadingSectionContactUs>
                </div>
              </div>
              <div class="space-y-2">
                <p class="flex items-center gap-2 text-lightBeige">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
                    <path
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span class="text-white">+62 819-0452-0743</span>
                </p>
                <p class="flex items-center gap-2 text-lightBeige">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span class="text-white">floristshelby@gmail.com</span>
                </p>
              </div>
            </div>
          </div>


          <!-- Map -->
          <div class="lg:w-2/3 h-[460px] rounded-lg overflow-hidden">
            <l-map
                v-model:zoom="zoom"
                :center="center"
                :options="mapOptions"
                class="h-full w-full"
            >
              <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  layer-type="base"
                  name="OpenStreetMap"
              ></l-tile-layer>
              <l-marker :lat-lng="center"></l-marker>
            </l-map>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Tambahan styling untuk leaflet */
:deep(.leaflet-control-container .leaflet-control) {
  z-index: 999;
}
</style>