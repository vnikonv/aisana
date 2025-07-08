import ru from './i18n/locales/ru.json'
import en from './i18n/locales/en.json'
import kz from './i18n/locales/kz.json'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  i18n: {
    langDir : './locales',
    locales: [
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'kz', name: 'Қазақша', file: 'kz.json' }
    ],
    defaultLocale: 'ru',
    strategy: 'prefix',
    lazy: true,
  
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
