import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  build: {
    // ✅ Kompres output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Hapus console.log di production
        drop_debugger: true,
      },
    },

    // ✅ Pisahkan chunk supaya tidak semua jadi 1 file besar
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-core': ['vue', 'vue-router'],
        },
        // ✅ Nama file pakai hash supaya cache browser efektif
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // ✅ Warn kalau ada chunk > 500kb
    chunkSizeWarningLimit: 500,

    // ✅ CSS di-split per chunk
    cssCodeSplit: true,
  },

  // ✅ Optimasi dependency saat dev
  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },
});
