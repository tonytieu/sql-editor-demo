import shrinkRay from 'shrink-ray-current'

export default {
  mode: 'spa',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'invoice-editor-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/element-ui.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "nuxt-compress"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  render: {
    compressor: shrinkRay()
  },
}
