// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      GOOGLE_BOOKS_URL: '',
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
})
