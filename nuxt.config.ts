// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: "https://widget.kominfo.go.id/gpr-widget-kominfo.min.js", type:"text/javascript"},
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in' // default
    }
  },
  css: [
    '~/assets/styles/main.scss'
  ],
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  modules: ['nuxt-icon'],
  googleFonts: {
    families: {
      Roboto: true,
      Nunito: true,
      Montserrat: true,
      'Josefin+Sans': true,
      Lato: [100, 300, 600, 800],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }
})
