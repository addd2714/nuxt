// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  // 默认开启 服务端渲染
  ssr: true,
  // 默认开启 调试工具
  devtools: { enabled: true },
  //应用模块
  modules: ['@vant/nuxt']
})
 