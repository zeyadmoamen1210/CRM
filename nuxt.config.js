export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'crm',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/bootstrap',
    '@/plugins/vuesax',
    { src : '~/plugins/apexcharts.js', ssr : false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    "@nuxtjs/auth-next",
  ],



  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: "https://hive.shout-out.website/"
  },



  auth: {
    strategies: {
      local: {
        user: {
          property: ""
        },
        endpoints: {
          login: { url: "/auth/signin", method: "post" },
          user: false,
          logout: false
        },
        token: {
          maxAge: false
        },
        refreshToken: {
          property: false,
          maxAge: false
        },

        autoLogout: false
      }
    }
  },

  router: {
    middleware: ["auth"]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    vendor : [
        'vue-apexchart'
    ]
  }
}
