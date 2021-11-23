export default {
  head: {
    title: 'Garfield',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { 'http-equiv': 'pragma', content: 'no-cache' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { charset: 'utf-8' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/test-web-game/favicon.ico' } 
    ],
    script: [
      {
        src: "/test-web-game/html5game/Garfield_211117_HTML5.js?EVCAC=1401519994"
      }
    ]
  },

  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    '~/static/style/main.css'
  ],

  plugins: [
    { src: '~/plugins/axios.js', ssr: true },
    { src: '~/plugins/game.js', ssr: false },
    { src: "~/plugins/icon.js" },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/dotenv'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  axios: {
    headers: {
      'Content-Type': 'application/json'
    }
  },

  build: {

  },
  target: 'static',
  router: {
    base: '/test-web-game/'
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'font', 'style'].includes(type)
      },
      shouldPrefetch: (file, type) => {
        return ['style', 'font', 'style'].includes(type)
      }
    }
  }
}
