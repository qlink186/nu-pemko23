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
    // pageTransition: {
    //   name: 'page',
    //   mode: 'out-in' // default
    // },
    // layoutTransition: { 
    //   name: 'layout', 
    //   mode: 'out-in' 
    // }
  },
  css: [
    '~/assets/styles/main.scss'
  ],
  buildModules: [
    '@nuxtjs/google-fonts',
  ],
  modules: [
    'nuxt-icon',
    '@nuxtjs/device',
    'nuxt-swiper',
    '@nuxt/image-edge',
  ],

  image: {
    dir: 'assets/img',
  },

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
  },
  runtimeConfig: {
    apiSecret: '', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      baseUrl: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      dashboardUrl: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      apiUrl: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
})
