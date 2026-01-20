<script setup>
import { RouterLink } from "vue-router";

const phoneNumber = "6281904520743";
const message = "Hallo shelbyflorist Mau Pesan Bunga Buat Hari Ini";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;
</script>

<template>
  <section class="bg-beige">
    <nav
      class="border-b border-lightBeige max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div class="navbar">
        <div class="navbar-start">
          <!--  Navbar sm atau untuk ukuran mobile  -->
          <div class="dropdown">
            <div
              tabindex="0"
              aria-label="Buka menu navigasi"
              role="button"
              class="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <li><RouterLink to="/">Beranda</RouterLink></li>
              <li>
                <details>
                  <summary>
                    <RouterLink to="/AllProduct">Produk Kami</RouterLink>
                  </summary>
                  <ul class="p-2 z-10">
                    <li>
                      <RouterLink to="/KaranganBunga"
                        >Karangan Bunga</RouterLink
                      >
                    </li>
                    <li><RouterLink to="/Bouquet">Bouquet</RouterLink></li>
                    <li>
                      <RouterLink to="/StandingFlower"
                        >Standing Flower</RouterLink
                      >
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <RouterLink to="/FlashSale"> Flash Sale </RouterLink>
              </li>
              <li>
                <RouterLink to="/PremiumBouquet"> Premium Bouquet </RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'home', hash: '#contactUs' }"
                  >Kontak Kami</RouterLink
                >
              </li>
            </ul>
          </div>

          <!-- Title & Logo -->
          <div
            class="text-xl md:text-2xl normal-case font-poppins font-semibold text-darkBeige text-nowrap w-full text-center lg:text-left flex items-center justify-center lg:justify-start gap-1"
          >
            <!-- Spacing antara emoji dan text -->
            <RouterLink to="/" class="tracking-wider"
              >SHELBY FLORIST💐</RouterLink
            >
          </div>
        </div>

        <div class="navbar-center hidden lg:flex">
          <ul class="flex gap-8">
            <li>
              <RouterLink to="/" class="link-style" active-class="link-active"
                >Beranda</RouterLink
              >
            </li>
            <li class="relative group">
              <RouterLink
                to="/AllProduct"
                class="link-style"
                active-class="link-active"
                >Produk Kami</RouterLink
              >
              <!-- Dropdown menu -->
              <ul
                class="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-48 z-[99] cursor-pointer"
              >
                <li>
                  <RouterLink
                    to="/KaranganBunga"
                    class="link-focus link-style block px-4 py-2 hover:bg-gray-100"
                    active-class="link-active"
                    >Karangan Bunga</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    to="/Bouquet"
                    class="link-focus link-style block px-4 py-2 hover:bg-gray-100"
                    active-class="link-active"
                    >Bouquet</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    to="/StandingFlower"
                    class="link-focus link-style block px-4 py-2 hover:bg-gray-100"
                    active-class="link-active"
                    >Standing Flower</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    to="/FlashSale"
                    class="link-focus link-style block px-4 py-2 hover:bg-gray-100"
                    active-class="link-active"
                    >Flash Sale</RouterLink
                  >
                </li>
                <li>
                  <RouterLink
                    to="/PremiumBouquet"
                    class="link-focus link-style block px-4 py-2 hover:bg-gray-100"
                    active-class="link-active"
                    >Premium Bouquet</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'home', hash: '#contactUs' }"
                class="link-focus link-style"
                >Kontak</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'home', hash: '#aboutUs' }"
                class="link-focus link-style"
                >Tentang Kami</RouterLink
              >
            </li>
          </ul>
        </div>

        <!--  Button Whatsapp  -->
        <div class="navbar-end">
          <!--  Button Whatsapp  -->
          <div>
            <a
              :href="whatsappUrl"
              aria-label="kontak whatsapp"
              target="_blank"
              class="btn btn-success text-white md:btn-sm rounded-full md:rounded-full invisible md:visible"
            >
              <!-- WhatsApp Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                />
              </svg>
              <!-- Teks yang hanya muncul di desktop -->
              <span class="hidden md:inline-flex">Whatsapp</span>
            </a>
          </div>

          <div>
            <a
              href="tel:+6281904520743"
              aria-label="kontak whatsapp"
              target="_blank"
              class="btn bg-darkBeige text-white md:btn-md rounded-full md:rounded-full ms-4 md:hidden"
            >
              <!-- WhatsApp Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped></style>
