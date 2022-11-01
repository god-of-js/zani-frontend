// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    runtimeConfig: {
      public: {
        baseURL: process.env.BASE_URL || 'https://api.example.com/',
      },
    },
})
