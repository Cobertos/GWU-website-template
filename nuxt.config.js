const title = 'Game Workers Unite Detroit';
const description = 'The Detroit chapter of Game Workers Unite, an organization pushing to unionize the game industry.';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },

      { name: 'description', content: description },
      { name: 'keywords', content: 'game,workers,unite,gwu,union,game workers unite' },
      { name: 'author', content: 'Cobertos / Peter' },

      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:url', content: 'TODO' },
      { name: 'og:image', content: 'TODO' }, //Make sure this isn't https or you have to use a different meta
      { name: 'og:image:width', content: '' },
      { name: 'og:image:height', content: '' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'TODO' },
      { name: 'twitter:site', content: '@GWU_Detroit' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vue-fontawesome.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
