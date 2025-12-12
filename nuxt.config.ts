// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  app: {
    head: {
      title: '宏國德霖科技大學 AI 基礎應用與創意繪圖競賽人才培育營',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: '宏國德霖科技大學主辦的 AI 基礎應用與創意繪圖競賽人才培育營，旨在培養學生在人工智慧領域的基礎應用能力與創意繪圖技巧。' },
        { name: 'keywords', content: '宏國德霖科技大學, AI 基礎應用, 創意繪圖, 人才培育營, 人工智慧, AI 競賽' },
      ],},
  },
  modules: ['@nuxthub/core-nightly', '@nuxthub/core', '@nuxtjs/tailwindcss'],
  hub: {},
  nitro: {
    preset: 'cloudflare-pages',
  },
})