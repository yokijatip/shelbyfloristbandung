<script setup>
// Import yang diperlukan
import 'leaflet/dist/leaflet.css'
import {LMap, LMarker, LTileLayer} from '@vue-leaflet/vue-leaflet'
import {onMounted, ref} from 'vue'
import SubTitleSection from "./elements/text/SubTitleSection.vue";
import TitleSection from "./elements/text/TitleSection.vue";
import HeadingSectionContactUs from "./elements/text/HeadingSectionContactUs.vue";


// koordinat untuk kedua workshop
const markers = ref([
  {
    position: [-6.9469094, 107.6201593],
    tooltip: "Workshop 1 - Kp. Pengkolan Caringin"
  },
  {
    position: [-7.0177587, 107.6473841],
    tooltip: "Workshop 2 - Jl.Pasirluyu Selatan"
  }
])

// Set center map di antara kedua lokasi
const center = ref([-6.9823340, 107.6337717])
const zoom = ref(12)
const mapOptions = ref({
  zoomControl: true
})

// Konfigurasi icon
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


// Workshop 2 End

// whatsapp
const phoneNumber = "6281904520743";
const message = "Hallo shelbyflorist Mau Pesan Bunga Buat Hari Ini";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

</script>

<template>
  <div  class="bg-darkBeige ">
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

        <div class="flex flex-col md:flex-col-reverse gap-8 md:items-center">

          <!-- Contact Info -->
          <div class="md:flex lg:w-full justify-center items-baseline gap-12 space-y-8">

            <div>
              <div class="flex items-center gap-4 mb-4">
                <div class="p-2 bg-white rounded">
                  <svg class="w-6 h-6 text-darkBeige" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <HeadingSectionContactUs class="text-beige text-start">
                    Alamat Worhshop  <span class="font-poppins font-light">1</span>
                  </HeadingSectionContactUs>
                </div>
              </div>
              <p class="text-white text-md">
                Kp. Pengkolan Caringin, RT.06/RW.02, Wargamekar<br>
                Kec.Baleendah Kabupaten Bandung, Jawa Barat<br>
                40381 Indonesia
              </p>
            </div>

            <div>
              <div class="flex items-center gap-4 mb-4">
                <div class="p-2 bg-white rounded">
                  <svg class="w-6 h-6 text-darkBeige" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <HeadingSectionContactUs class="text-beige text-start">
                    Alamat Worhshop  <span class="font-poppins font-light">2</span>
                  </HeadingSectionContactUs>
                </div>
              </div>
              <p class="text-white text-md">
                Jl.Pasirluyu Selatan, Pasirluyu<br>
                Kec.Regol, Kota Bandung, Jawa Barat<br>
                40254 Indonesia
              </p>
            </div>

            <div>
              <div class="flex items-center gap-4 mb-4">
                <div class="p-2 bg-white rounded">
                  <svg class="w-6 h-6 text-darkBeige" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
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
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
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
                <!-- WhatsApp -->
                <p class="flex items-center gap-2 text-lightBeige">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <a :href="whatsappUrl" target="_blank" class="text-white hover:text-beige cursor-pointer">+62 819-0452-0743</a>
                </p>
                <!-- Instagram -->
                <p class="flex items-center gap-2 text-lightBeige">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <a href="https://www.instagram.com/shelby.florist/" target="_blank" class="text-white hover:text-beige cursor-pointer">@shelby.florist</a>
                </p>
              </div>
            </div>
          </div>


          <!-- Map -->
          <!-- Map -->
          <div class="lg:w-full h-[360px] rounded-lg overflow-hidden z-20">
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
              <!-- Gunakan v-for untuk menampilkan multiple markers -->
              <l-marker
                  v-for="marker in markers"
                  :key="marker.tooltip"
                  :lat-lng="marker.position"
              >
              </l-marker>
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
  z-index: 30;
}
</style>