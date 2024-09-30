import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {

      description: 'To mint is a human right.',

      defaultAvatar: '/img/9496.svg',
      baseURL: process.env.BASE_URL || 'http://localhost:3000',  // Setze die Basis-URL

      projects: [
        {
          title: 'PunkApepen',
          image: 'https://i.seadn.io/s/primary-drops/0xf39be779905d16fe23b2cc1297dc3e759d2daa11/32043792:about:media:9d46a3e3-7c51-4937-9580-c5497021f280.png?auto=format&dpr=1&w=750',
          link: 'https://www.punkapepen.com/'
        },
        {
          title: 'itmightbeart',
          image: 'https://i.seadn.io/s/primary-drops/0x6d01521974c91f76e7d8d62f30c6e1f74b0b7b1c/33360848:about:media:23467104-316f-4eca-bedf-14151104cd46.png?auto=format&dpr=1&w=750',
          link: 'https://app.itmightbe.art/',
        },
        
      ]
    }
  },
  
  alias: {
    '@base': '@visualizevalue/mint-app-base',
  },

  extends: [
    //'..', // Extend our theme
    '@visualizevalue/mint-app-base', // Extend the base layer
  ],

  css: [
    '@base/assets/styles/index.css', // Extend the base theme styles
    join(currentDir, './assets/styles/theme.css'), // Add our own styles
  ],

  
  
  devtools: { enabled: true }
})
