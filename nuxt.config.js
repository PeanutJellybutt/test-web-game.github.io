export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'Garfield',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { "http-equiv": 'X-UA-Compatible', content: 'IE=edge' },
      { "http-equiv": 'pragma', content: 'no-cache' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/test-web-game/favicon.ico' } 
    ],
    script: [
      {
        src: "/test-web-game/html5game/Garfield_2111219.js?YLVZB=1680317918",
      }
    ]
  },
  
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    '~/static/style/main.css'
  ],

  plugins: [
    { src: '~/plugins/game.js', ssr: false },
  ],

  components: true,

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/device',
  ],
  
  device: {
    refreshOnResize: true
  },

  build: {

  },
  target: 'static',
  router: {
    base: '/test-web-game/'
  },
  server: {
    host: '0.0.0.0', 
    timing: false
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
