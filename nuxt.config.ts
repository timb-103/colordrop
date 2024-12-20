export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'robots', content: 'index, follow' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'googlebot', content: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'bingbot', content: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { property: 'og:site_name', content: 'ColorDrop' }
      ]
    }
  },
  css: [
    '@/assets/css/global.css'
  ],
  colorMode: {
    preference: 'light'
  },
  modules: ['@nuxtjs/google-fonts', '@nuxt/ui', '@nuxtjs/plausible'],
  tailwindcss: {
    viewer: false
  },
  googleFonts: {
    families: {
      Lora: [300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  },
  typescript: {
    typeCheck: 'build'
  },
  nitro: {
    experimental: {
      tasks: true
    }
  },
  ui: {
    disableGlobalStyles: true
  },
  runtimeConfig: {
    nodeEnv: process.env.NODE_ENV,
    logLevel: process.env.LOG_LEVEL ?? 'debug',
    public: {
      nodeEnv: process.env.NODE_ENV,
      siteUrl: process.env.SITE_URL ?? 'http://localhost:3000',
      apiUrl: process.env.SITE_URL !== undefined
        ? `${process.env.SITE_URL}/api`
        : 'http://localhost:3000/api'
    }
  },
  routeRules: {
    /** @description add cache time for images to make pagespeed insights happy */
    '/img/**': { headers: { 'cache-control': 'max-age=31536000' } },
    '/gradients': { redirect: { to: '/', statusCode: 301 } },
    '/flat': { redirect: { to: '/', statusCode: 301 } }
  },
  compatibilityDate: '2024-09-23'
});
