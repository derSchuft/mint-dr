// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      walletAddress: process.env.NUXT_PUBLIC_WALLET_ADDRESS || '',
      defaultAvatar: '/icons/PunkApepen-9496.svg',

      projects: [
        {
          title: 'PunkApepen',
          image: 'https://i.seadn.io/s/primary-drops/0xf39be779905d16fe23b2cc1297dc3e759d2daa11/32043792:about:media:9d46a3e3-7c51-4937-9580-c5497021f280.png?auto=format&dpr=1&w=750',
          link: 'https://www.punkapepen.com/'
        },
        {
          title: 'PunkBlocks',
          image: 'https://i.seadn.io/s/primary-drops/0x9c7e56f10e655a164dab3b6255e8e4e4d3b67db7/33610711:about:media:b95cd225-5996-4248-bf43-d2955555c82a.png?auto=format&dpr=1&w=750',
          link: 'https://highlight.xyz/mint/base:0x9C7E56f10E655a164dab3b6255E8E4e4D3b67dB7',
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
