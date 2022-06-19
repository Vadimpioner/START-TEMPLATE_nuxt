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

  plugins: [],

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
      Raleway: [400, 500, 700],
      'Material+Icons': true,
      'Material+Icons+Outlined': true,
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

  build: {}
}
