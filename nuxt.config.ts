export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
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
