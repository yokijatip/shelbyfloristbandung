<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const phoneNumber = '6281904520743';
const message = 'Hallo shelbyflorist Mau Pesan Bunga Buat Hari Ini';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const route = useRoute();

// Navbar transparan hanya di homepage
const isHome = computed(() => route.name === 'home' || route.path === '/');
const isScrolled = ref(false);
const isVisible = ref(true);

let lastScroll = 0;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  // Detect scroll down/up
  if (currentScroll > lastScroll && currentScroll > 100) {
    isVisible.value = false; // hide navbar
  } else {
    isVisible.value = true; // show navbar
  }

  // Detect background change
  isScrolled.value = currentScroll > 50;

  lastScroll = currentScroll;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',

      // hide/show animation
      isVisible ? 'translate-y-0' : '-translate-y-full',

      // background logic
      isHome && !isScrolled
        ? 'bg-transparent'
        : 'bg-veryDarkBeige/60 backdrop-blur-md border-b border-[#e8ddd0] shadow-sm',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between lg:h-12 sm:h-8">
        <!-- HAMBURGER mobile -->
        <div class="dropdown lg:hidden">
          <div
            tabindex="0"
            role="button"
            aria-label="Buka menu navigasi"
            class="btn btn-ghost btn-sm p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              :class="isHome ? 'text-white' : 'text-[#3d2c1e]'"
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
            class="menu menu-sm dropdown-content bg-white rounded-box z-[100] mt-3 w-56 p-2 shadow-xl border border-[#e8ddd0]"
          >
            <li>
              <RouterLink to="/" class="font-semibold text-[#3d2c1e]"
                >Beranda</RouterLink
              >
            </li>
            <li>
              <details>
                <summary class="font-semibold text-[#3d2c1e]">
                  Produk Kami
                </summary>
                <ul class="p-2 z-10">
                  <li>
                    <RouterLink to="/AllProduct">Semua Produk</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/KaranganBunga">Karangan Bunga</RouterLink>
                  </li>
                  <li><RouterLink to="/Bouquet">Bouquet</RouterLink></li>
                  <li>
                    <RouterLink to="/StandingFlower"
                      >Standing Flower</RouterLink
                    >
                  </li>
                  <li><RouterLink to="/FlashSale">Flash Sale</RouterLink></li>
                  <li>
                    <RouterLink to="/PremiumBouquet"
                      >Premium Bouquet</RouterLink
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <RouterLink
                :to="{ name: 'home', hash: '#contactUs' }"
                class="text-[#3d2c1e]"
                >Kontak Kami</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ name: 'home', hash: '#aboutUs' }"
                class="text-[#3d2c1e]"
                >Tentang Kami</RouterLink
              >
            </li>
            <li class="mt-2">
              <a
                :href="whatsappUrl"
                target="_blank"
                class="flex items-center gap-2 bg-[#c9a96e] text-white font-bold rounded-full px-4 py-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  class="w-4 h-4 flex-shrink-0"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                  />
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.945 9.945 0 01-4.788-1.22L2.92 19.01l1.384-4.184A9.961 9.961 0 012.04 12C2.04 6.477 6.517 2 12.04 2c5.523 0 9.96 4.477 9.96 10s-4.477 10-10 10h-.011z"
                  />
                </svg>
                Order via WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <!-- LOGO -->
        <RouterLink to="/" class="flex items-center gap-2 flex-shrink-0">
          <span
            class="font-cormorant italic text-3xl font-bold leading-none"
            :class="isHome ? 'text-white' : 'text-[#3d2c1e]'"
            >S</span
          >
          <div
            :class="isHome ? 'text-white' : 'text-[#3d2c1e]'"
            class="leading-tight"
          >
            <div class="text-xs font-bold tracking-[3px]">HELBY</div>
            <div class="text-[10px] tracking-[4px] font-light">FLORIST</div>
          </div>
          <svg class="w-5 h-5 ml-0.5" viewBox="0 0 24 24" fill="#c9a96e">
            <path
              d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"
              opacity="0.85"
            />
          </svg>
        </RouterLink>

        <!-- MENU DESKTOP -->
        <ul class="hidden lg:flex items-center gap-7">
          <li>
            <RouterLink
              to="/"
              class="nav-link text-sm font-semibold tracking-wide transition-colors"
              :class="
                isHome
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#5a3e2b] hover:text-[#c9a96e]'
              "
              active-class="!text-[#c9a96e]"
              >Beranda</RouterLink
            >
          </li>
          <li class="relative group">
            <RouterLink
              to="/AllProduct"
              class="nav-link text-sm font-semibold tracking-wide transition-colors flex items-center gap-1"
              :class="
                isHome
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#5a3e2b] hover:text-[#c9a96e]'
              "
              active-class="!text-[#c9a96e]"
            >
              Produk Kami
              <svg
                class="w-3.5 h-3.5 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </RouterLink>
            <ul
              class="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl w-52 z-[99] border border-[#e8ddd0] py-2 mt-1"
            >
              <li>
                <RouterLink
                  to="/AllProduct"
                  class="block px-4 py-2.5 text-sm font-semibold text-[#3d2c1e] hover:bg-[#fdf8f0] hover:text-[#c9a96e] transition-colors"
                  >Semua Produk</RouterLink
                >
              </li>
              <div class="mx-4 my-1 border-t border-[#ece8e0]"></div>
              <li>
                <RouterLink to="/KaranganBunga" class="dropdown-item"
                  >Karangan Bunga</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/Bouquet" class="dropdown-item"
                  >Bouquet</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/StandingFlower" class="dropdown-item"
                  >Standing Flower</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/FlashSale" class="dropdown-item"
                  >Flash Sale</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/PremiumBouquet" class="dropdown-item"
                  >Premium Bouquet</RouterLink
                >
              </li>
            </ul>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'home', hash: '#contactUs' }"
              class="nav-link text-sm font-semibold tracking-wide transition-colors"
              :class="
                isHome
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#5a3e2b] hover:text-[#c9a96e]'
              "
              >Kontak</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="{ name: 'home', hash: '#aboutUs' }"
              class="nav-link text-sm font-semibold tracking-wide transition-colors"
              :class="
                isHome
                  ? 'text-white/90 hover:text-white'
                  : 'text-[#5a3e2b] hover:text-[#c9a96e]'
              "
              >Tentang Kami</RouterLink
            >
          </li>
        </ul>

        <!-- RIGHT ACTIONS -->
        <div class="flex items-center gap-2">
          <!-- Telepon mobile only -->
          <a
            href="tel:+6281904520743"
            aria-label="Hubungi via telepon"
            class="lg:hidden w-9 h-9 rounded-full flex items-center justify-center transition"
            :class="
              isHome
                ? 'bg-black/40 hover:bg-black/60'
                : 'bg-[#f0e8dc] hover:bg-[#e8ddd0]'
            "
          >
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-4 h-4"
              :class="isHome ? 'text-white' : 'text-[#3d2c1e]'"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
          </a>
          <!-- WhatsApp -->
          <a
            :href="whatsappUrl"
            target="_blank"
            aria-label="Order via WhatsApp"
            class="flex items-center gap-2 bg-[#c9a96e] hover:bg-[#a07840] text-white text-sm font-bold rounded-full px-4 py-2 transition shadow-md"
          >
            <svg viewBox="0 0 24 24" fill="white" class="w-4 h-4 flex-shrink-0">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
              />
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.029 18.88a9.945 9.945 0 01-4.788-1.22L2.92 19.01l1.384-4.184A9.961 9.961 0 012.04 12C2.04 6.477 6.517 2 12.04 2c5.523 0 9.96 4.477 9.96 10s-4.477 10-10 10h-.011z"
              />
            </svg>
            <span class="hidden sm:inline">Order Now</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.dropdown-item {
  @apply block px-4 py-2.5 text-sm text-[#5a3e2b] hover:bg-[#fdf8f0] hover:text-[#c9a96e] transition-colors;
}
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: #c9a96e;
  transition: width 0.25s ease;
}
.nav-link:hover::after,
.router-link-active::after {
  width: 100%;
}
</style>
