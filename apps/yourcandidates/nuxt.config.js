import electoral_district_table from './data/electoral_district_table.json'
const TITLE = 'เลือกตั้ง 66 รอบนี้มีอะไรให้เลือกบ้าง?'
const DESCRIPTION = 'ค้นหาผู้สมัคร ส.ส. และพรรคการเมืองในเขต/อำเภอบ้านคุณ'
const PROD_URL = 'https://election66.wevis.info/yourcandidates'
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: TITLE,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:title', property: 'og:title', content: TITLE },
      {
        hid: 'og:description',
        property: 'og:description',
        content: DESCRIPTION,
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: '/og.png' },
      { hid: 'og:url', property: 'og:url', content: PROD_URL },
      { hid: 'twitter:title', name: 'twitter:title', content: TITLE },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: DESCRIPTION,
      },
      { hid: 'twitter:image', name: 'twitter:image', content: '/og.png' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:url', name: 'twitter:url', content: PROD_URL },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://wevis.info/wp-content/uploads/2022/01/favicon.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '~/assets/styles/index.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  router: {
    base: '/yourcandidates',
  },

  generate: {
    routes() {
      return Object.values(electoral_district_table).map((electoral) => {
        return {
          route: `/${electoral.province}/${electoral.electoralDistrictNumber}`,
        }
      })
    },
  },
}
