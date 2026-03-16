// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-10',
  devtools: { enabled: false },
  app: {
    head: {
      title: '宏國德霖科技大學 AI 基礎應用與工作實作研習',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'description', content: '宏國德霖科技大學主辦的 AI 基礎應用與工具實作研習，旨在培養學生在人工智慧領域的基礎應用能力與創意繪圖技巧。' },
        { name: 'keywords', content: '宏國德霖科技大學, AI 基礎應用, 創意繪圖, 人才培育營, 人工智慧, AI 競賽, AI工具實作研習' },
        { name: 'google-site-verification', content: 'FsjNlKnswzEpyf5_ZtoTvqej_32UjYbcyWv2alm1zZQ' },
      ],},
  },
  modules: ['@nuxthub/core', '@nuxtjs/tailwindcss'],
  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  hub: {},

})