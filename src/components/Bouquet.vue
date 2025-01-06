<script scoped>

</script>

<template>
  <div class="container mx-auto px-4 py-16">
    
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Text Content - akan muncul di atas pada mobile -->
      <div class="lg:order-last lg:w-1/3 mb-8 lg:mb-0">
        <div class="lg:pl-8">
          <p class="text-gray-600 uppercase tracking-wider text-sm mb-2">BOUQUET</p>
          <h2 class="text-3xl font-light mb-4">Weddings + Engagements</h2>
          <p class="text-gray-600 leading-relaxed mb-6">
            We're passionate about capturing the essence of your unique love story and turning it into a timeless collection 
            of photographs. From your initial engagement to your eagerly anticipated wedding day, we are committed to 
            preserving every precious moment along the way.
          </p>
          <button class="btn bg-darkBeige text-white hover:bg-opacity-90 rounded-none">
            LIHAT LAINNYA
          </button>
        </div>
      </div>

      <!-- Images Container -->
      <div class="lg:w-2/3 grid grid-cols-2 gap-4">
        <div class="aspect-[4/5] overflow-hidden">
          <img 
            src="/public/wedding.webp" 
            alt="Wedding couple in desert landscape" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="aspect-[4/5] overflow-hidden">
          <img 
            src="/public/19.jpg" 
            alt="Wedding couple with trees" 
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>