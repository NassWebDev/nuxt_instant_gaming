// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['nuxt-icon', 'vue3-carousel-nuxt'],
  css: [`@/assets/styles/reset.css`],
  
})
