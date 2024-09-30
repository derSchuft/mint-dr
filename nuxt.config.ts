// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      walletAddress: process.env.NUXT_PUBLIC_WALLET_ADDRESS || '',

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
    },
  },
  
  alias: {
    '@base': '@visualizevalue/mint-app-base',
  },

  css: [
    '@base/assets/styles/index.css', // Extend the base theme styles
    '~/assets/styles/theme.css', // Add our own styles
  ],

  extends: '@visualizevalue/mint-app-base',
  
  compatibilityDate: '2024-04-03'
})
