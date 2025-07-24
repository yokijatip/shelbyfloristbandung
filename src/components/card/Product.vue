<script setup>
// Define props untuk komponen
import CommonButtonOrderWhatsapp from "../elements/button/CommonButtonOrderWhatsapp.vue";
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["order"]);

const handleOrder = () => {
  emit("order", {
    category: props.category,
    code: props.code,
    price: props.price,
    type: props.type,
  });
};

const showZoom = ref(false);

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
  document.body.style.overflow = "hidden";
  // Reset zoom state
  scale.value = 1;
  position.value = { x: 0, y: 0 };
};

const closeZoomModal = () => {
  showZoom.value = false;
  document.body.style.overflow = "auto";
};

const handleTouchStart = (event) => {
  if (event.touches.length === 2) {
    // Pinch gesture started
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    lastTouchDistance.value = getTouchDistance(touch1, touch2);
    isDragging.value = true;
  } else if (event.touches.length === 1) {
    // Pan gesture started
    lastTouchPosition.value = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
    isDragging.value = true;
  }
};

const handleTouchMove = (event) => {
  if (!isDragging.value) return;

  if (event.touches.length === 2) {
    // Handle pinch zoom
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    const currentDistance = getTouchDistance(touch1, touch2);

    if (lastTouchDistance.value) {
      const delta = currentDistance - lastTouchDistance.value;
      const newScale = scale.value * (1 + delta / 200);
      scale.value = Math.min(Math.max(newScale, MIN_SCALE), MAX_SCALE);
    }

    lastTouchDistance.value = currentDistance;
  } else if (event.touches.length === 1 && scale.value > 1) {
    // Handle pan when zoomed in
    const touch = event.touches[0];
    if (lastTouchPosition.value) {
      const deltaX = touch.clientX - lastTouchPosition.value.x;
      const deltaY = touch.clientY - lastTouchPosition.value.y;

      position.value = {
        x: position.value.x + deltaX,
        y: position.value.y + deltaY,
      };
    }

    lastTouchPosition.value = {
      x: touch.clientX,
      y: touch.clientY,
    };
  }
};

const handleTouchEnd = () => {
  isDragging.value = false;
  lastTouchDistance.value = null;
  lastTouchPosition.value = null;

  // Reset position if scale is 1
  if (scale.value === 1) {
    position.value = { x: 0, y: 0 };
  }
};

const getTouchDistance = (touch1, touch2) => {
  const dx = touch1.clientX - touch2.clientX;
  const dy = touch1.clientY - touch2.clientY;
  return Math.sqrt(dx * dx + dy * dy);
};

// Prevent default zoom behavior on double tap
const preventDefaultZoom = (event) => {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
};

onMounted(() => {
  document.addEventListener("touchmove", preventDefaultZoom, {
    passive: false,
  });
});

onUnmounted(() => {
  document.removeEventListener("touchmove", preventDefaultZoom);
});
</script>

<template>
  <div
    class="w-full md:w-72 bg-white rounded-lg overflow-hidden shadow-md flex md:flex-col flex-row hover:shadow-lg transition-shadow duration-300"
  >
    <!-- Image Container with Fixed Height -->
    <div
      class="w-full h-auto md:h-[280px] overflow-hidden cursor-zoom-in relative items-center justify-center"
      @click="openZoomModal"
    >
      <img
        :src="imageUrl"
        :alt="category"
        class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
      />
    </div>

    <!-- Content Container -->
    <div class="p-4 flex flex-col justify-between min-h-[120px]">
      <div>
        <h3 class="font-cormorant text-xl font-bold text-darkBeige mb-1">
          {{ category }}
        </h3>
        <p class="text-sm text-lightBeige mb-3">Code: {{ code }}</p>
      </div>

      <div class="flex flex-wrap justify-between items-center gap-2">
        <p class="text-darkBeige font-semibold text-sm">
          Rp {{ price.toLocaleString() }}
        </p>
        <CommonButtonOrderWhatsapp class="flex-shrink-0" @click="handleOrder">
          Beli langsung
        </CommonButtonOrderWhatsapp>
      </div>
    </div>

    <!-- Zoom Modal with Transition -->
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
        class="fixed inset-0 md:mt-14 z-50 flex items-center justify-center bg-black bg-opacity-75"
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
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <img
              :src="imageUrl"
              :alt="code"
              class="w-full md:w-[620px] h-auto select-none"
              @dragstart.prevent
            />
          </div>
          <button
            @click="closeZoomModal"
            class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
          >
            <span class="text-xl">&times;</span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped></style>
