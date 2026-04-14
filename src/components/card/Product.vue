<script setup>
import CommonButtonOrderWhatsapp from '../elements/button/CommonButtonOrderWhatsapp.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { optimizeCloudinaryUrl, generateSrcSet } from '@/utils/cloudinary';

const props = defineProps({
  category: { type: String, required: true },
  code: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: String, required: false, default: null },
});

const thumbnailUrl = computed(() =>
  optimizeCloudinaryUrl(props.imageUrl, { width: 400, quality: 'auto:eco' })
);

const imageSrcSet = computed(() => generateSrcSet(props.imageUrl, [400, 800]));

// ✅ Zoom image hanya di-compute saat modal dibuka (lazy)
const showZoom = ref(false);
const zoomImageUrl = computed(() =>
  showZoom.value
    ? optimizeCloudinaryUrl(props.imageUrl, {
        width: 1200,
        quality: 'auto:best',
      })
    : ''
);

const emit = defineEmits(['order']);
const handleOrder = () => {
  emit('order', {
    category: props.category,
    code: props.code,
    price: props.price,
    type: props.type,
    size: props.size,
  });
};

const scale = ref(1);
const position = ref({ x: 0, y: 0 });
const isDragging = ref(false);
const lastTouchDistance = ref(null);
const lastTouchPosition = ref(null);
const zoomContainer = ref(null);

const MIN_SCALE = 1;
const MAX_SCALE = 4;

const openZoomModal = () => {
  showZoom.value = true;
  document.body.style.overflow = 'hidden';
  scale.value = 1;
  position.value = { x: 0, y: 0 };
};

const closeZoomModal = () => {
  showZoom.value = false;
  document.body.style.overflow = '';
};

const getTouchDistance = (t1, t2) => {
  const dx = t1.clientX - t2.clientX;
  const dy = t1.clientY - t2.clientY;
  return Math.sqrt(dx * dx + dy * dy);
};

const handleTouchStart = (e) => {
  if (e.touches.length === 2) {
    lastTouchDistance.value = getTouchDistance(e.touches[0], e.touches[1]);
  } else if (e.touches.length === 1) {
    lastTouchPosition.value = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }
  isDragging.value = true;
};

const handleTouchMove = (e) => {
  if (!isDragging.value) return;
  if (e.touches.length === 2) {
    const currentDistance = getTouchDistance(e.touches[0], e.touches[1]);
    if (lastTouchDistance.value) {
      const delta = currentDistance - lastTouchDistance.value;
      const newScale = scale.value * (1 + delta / 200);
      scale.value = Math.min(Math.max(newScale, MIN_SCALE), MAX_SCALE);
    }
    lastTouchDistance.value = currentDistance;
  } else if (e.touches.length === 1 && scale.value > 1) {
    const touch = e.touches[0];
    if (lastTouchPosition.value) {
      position.value = {
        x: position.value.x + (touch.clientX - lastTouchPosition.value.x),
        y: position.value.y + (touch.clientY - lastTouchPosition.value.y),
      };
    }
    lastTouchPosition.value = { x: touch.clientX, y: touch.clientY };
  }
};

const handleTouchEnd = () => {
  isDragging.value = false;
  lastTouchDistance.value = null;
  lastTouchPosition.value = null;
  if (scale.value <= 1) position.value = { x: 0, y: 0 };
};

// ✅ Hanya pasang listener saat modal zoom aktif, bukan global
onMounted(() => {});
onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<template>
  <div
    class="w-full md:w-72 bg-white rounded-lg overflow-hidden shadow-md flex md:flex-col flex-row hover:shadow-lg transition-shadow duration-300"
  >
    <!-- ✅ Image Container: height fixed di semua breakpoint → fix CLS -->
    <div
      class="w-32 h-32 md:w-full md:h-[280px] flex-shrink-0 overflow-hidden cursor-zoom-in relative"
      @click="openZoomModal"
    >
      <img
        :src="thumbnailUrl"
        :srcset="imageSrcSet"
        sizes="(max-width: 768px) 128px, 288px"
        :alt="`Karangan Bunga ${category} - ${code}`"
        class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        loading="lazy"
        decoding="async"
        width="400"
        height="400"
      />
    </div>

    <!-- Content Container -->
    <div class="p-4 flex flex-col justify-between flex-1 min-h-[120px]">
      <div>
        <h3 class="font-cormorant text-xl font-bold text-darkBeige mb-1">
          {{ category }}
        </h3>
        <div class="flex flex-wrap gap-2 items-center mb-1">
          <p class="text-sm text-lightBeige">Code: {{ code }}</p>
        </div>
        <span v-if="size" class="text-sm text-gray-600">
          <span class="text-lightBeige">•</span>
          <span class="ml-1">{{ size }}</span>
        </span>
      </div>

      <div class="flex flex-wrap justify-between items-center gap-2 mt-2">
        <p class="text-darkBeige font-semibold text-sm">
          Rp {{ price.toLocaleString('id-ID') }}
        </p>
        <CommonButtonOrderWhatsapp
          class="flex-shrink-0"
          @click.stop="handleOrder"
        >
          Beli langsung
        </CommonButtonOrderWhatsapp>
      </div>
    </div>

    <!-- ✅ Zoom Modal: gambar hanya load saat modal terbuka -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="showZoom"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          @click="closeZoomModal"
        >
          <div
            class="relative max-w-4xl max-h-[90vh] overflow-hidden touch-none"
            @click.stop
          >
            <div
              ref="zoomContainer"
              class="transform-gpu"
              :style="{
                transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease-out',
              }"
              @touchstart="handleTouchStart"
              @touchmove.prevent="handleTouchMove"
              @touchend="handleTouchEnd"
            >
              <img
                v-if="showZoom"
                :src="zoomImageUrl"
                :alt="`Karangan Bunga ${category} - ${code}`"
                class="w-full md:w-[620px] h-auto select-none"
                @dragstart.prevent
              />
            </div>
            <button
              @click="closeZoomModal"
              class="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition"
              aria-label="Tutup zoom"
            >
              <span class="text-xl leading-none">&times;</span>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
