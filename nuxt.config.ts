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
    redirect: false,
  },
  image: {
    domains: ['media.rawg.io'],
  },
  app: {
    head:{
      htmlAttrs:{
        lang: 'en',
      },
      meta: [
        {
          name: 'viewport',
          content: 'A sort of clone of Instant Gaming.'
        }
      ]
    }
  }
})
