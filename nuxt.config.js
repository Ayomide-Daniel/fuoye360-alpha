import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'FUOYE360',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: 'https://fuoye360.com/assets/images/favicon.png',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;500;600;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css',
      },
    ],
    script: [
      {
        src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/app.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/asset.js', '@/plugins/google-oauth.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
  // router: {
  //   middleware: ['auth'],
  // },
  auth: {
    strategies: {
      google: {
        clientId:
          '22203556179-kkgklgd6rdg5trqllb49g1n2edas9rd0.apps.googleusercontent.com',
      },
    },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          // featured_post: '#e1e2e4',
          featured: '#f7f7f7',
          postcard_grey: '#727377',
          text: '#121212',
          anchor: '#121212',
          nav: '#eee',
          aside: '#fafafa',
        },
        dark: {
          anchor: '#fff',
          text: '#fff',
          featured: '#1b1b1e',
          nav: '#242526',
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src',
        },
      },
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },
  ssr: false,
}
