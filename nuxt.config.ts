// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    'vue3-carousel-nuxt',
    '@nuxtjs/supabase',
    '@nuxt/image',
  ],
  css: [`@/assets/styles/reset.css`],
  supabase: {
    url: import.meta.env.SUPABASE_URL,
    key: import.meta.env.SUPABASE_KEY,
    redirect: false,
  },
  image:{
    format: ['webp'],
    quality: 80,
  }
})
