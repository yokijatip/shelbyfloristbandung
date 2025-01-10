<script setup>
// Define props untuk komponen
import CommonButtonOrderWhatsapp from "../elements/button/CommonButtonOrderWhatsapp.vue";

const props = defineProps({
  category: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['order'])

const handleOrder = () => {
  emit('order', {
    category: props.category,
    code: props.code,
    price: props.price
  })
}
</script>

<template>
  <div
      class="w-full md:w-72 flex md:flex-col bg-white rounded-lg overflow-hidden hover:shadow-lg flex-row transition-shadow">
    <div class="md:w-full aspect-square overflow-hidden">
      <img
          :src="imageUrl"
          :alt="category"
          class="w-full h-full md:w-full md:h-full object-cover transition-transform duration-300 hover:scale-105"
      >
    </div>

    <div class="p-4 flex flex-col md:flex-none justify-between">
      <div>
        <h3 class="font-cormorant text-xl font-bold text-darkBeige text-nowrap">{{ category }}</h3>
        <p class="text-sm text-lightBeige">Code: {{ code }}</p>
      </div>

      <div class="flex flex-wrap justify-between items-center md:mt-6 mt-0">
        <p class="text-darkBeige font-semibold text-sm">
          Rp {{ price.toLocaleString() }}
        </p>
        <CommonButtonOrderWhatsapp class="mt-2 md:mt-0" @click="handleOrder">

          Beli langsung
        </CommonButtonOrderWhatsapp>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>