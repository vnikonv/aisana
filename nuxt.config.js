export default {
  // Global page headers
  head: {
    title: 'ИИ-продукты СКУ им. М. Козыбаева',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Инновационные ИИ-решения от Северо-Казахстанского университета имени М. Козыбаева' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [
    '@/assets/css/main.css'
  ],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  // Modules
  modules: ['@nuxtjs/tailwindcss'],

  // Build Configuration
  build: {
  }
}