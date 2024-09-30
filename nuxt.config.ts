// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  alias: {
    '@base': '@visualizevalue/mint-app-base',
  },

  css: [
    '@base/assets/styles/index.css', // Extend the base theme styles
    '~/assets/styles/theme.css', // Add our own styles
  ],

  extends: '@visualizevalue/mint-app-base',
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
