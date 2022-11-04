// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://api.example.com/'
    }
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.nuxtjs.dev'
    }
  },

  /*
   ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
   */
  // modules: [['@nuxtjs/axios', { proxyHeaders: false }]],
  vite: {
    plugins: [eslintPlugin()]
  }
})
