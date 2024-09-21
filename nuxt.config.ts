import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  components: true,
  compatibilityDate: '2024-04-03',
  css: ['@/layouts/default.vue', '@/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  tailwindcss: {
    exposeConfig: true,
    configPath: './tailwind.config.js',
    viewer: true,
  },
  devtools: { enabled: false },
  spaLoadingTemplate: false,
  pinia: ['./store/**'],
});
