// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    'vue3-carousel-nuxt',
    '@nuxtjs/supabase'
  ],
  css: [`@/assets/styles/reset.css`],
})
