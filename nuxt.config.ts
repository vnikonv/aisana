export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  i18n: {
    langDir: 'locales/',
    locales: [
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'kz', name: 'Қазақша', file: 'kz.json' }
    ],
    defaultLocale: 'ru',
    
    
  },

  app: {
    head: {
      script: [
        { src: "https://unpkg.com/aos@2.3.4/dist/aos.js", body: true },
      ],
      link: [
        { rel: "stylesheet", href: "https://unpkg.com/aos@2.3.4/dist/aos.css" }
      ]
    }
  }
})
