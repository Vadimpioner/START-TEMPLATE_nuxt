export default {
    head: {
        title: 'TEMPLATE',
        htmlAttrs: {
            lang: 'ru'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '~/static/favicon.ico' }
        ]
    },

    router: {
        linkActiveClass: 'nuxtLink',
        linkExactActiveClass: 'nuxtLinkActive',
        // base: './'
    },

    css: [
        '~/static/css/_accomulate.scss',
    ],

    plugins: [
        '~/plugins/components.js',
    ],

    components: true,

    buildModules: ['@nuxtjs/google-fonts'],

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
    ],

    styleResources: {
        scss: [
            '~/static/css/_colors.scss',
            '~/static/css/_mixins.scss',
        ],
    },

    axios: {
        baseURL: '/',
    },

    build: {}
}
