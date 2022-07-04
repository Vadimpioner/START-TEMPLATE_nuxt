export default {
  head: {
    title: 'TEMPLATE',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '~/static/favicon.ico'
    }]
  },

  router: {
    linkActiveClass: 'nuxtLink',
    linkExactActiveClass: 'nuxtLinkActive',
  },

  css: [
    '~/assets/css/_accomulate.scss',
  ],

  plugins: [
    '~/plugins/outside.js',
    '~/plugins/tel-input.js',
    '~/plugins/v-mask.js',
    '~/plugins/portal-vue.js',
    '~/plugins/scrollTop.js',
    '~/plugins/scrollToElement.js',
    '~/plugins/element-ui.js',
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],

  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    display: 'swap',
    families: {
      Roboto: [400, 500, 700],
      'Material+Icons': true,
      'Material+Icons+Outlined': true,
      'Material+Icons+Round': true,
    },
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
  ],

  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        name: "English",
        code: "en",
        file: "en-US.json",
      },
      {
        name: "Русский",
        code: "ru",
        file: "ru-RU.json",
      },
    ],
    langDir: "lang/",
  },

  styleResources: {
    scss: [
      '~/assets/css/_variable.scss',
      '~/assets/css/_mixins.scss',
    ],
  },

  axios: {
    baseURL: '/',
  },

  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
