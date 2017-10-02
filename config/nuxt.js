'use strict'

const resolve = require('path').resolve
const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'PMV Sakyamuni',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Adonuxt project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'favicon.ico'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/font-awesome.css', '~assets/css/main.scss', '~assets/css/hero.css', '~assets/css/main.css'],
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#a30000' },
  loading: '~/components/Loading.vue',

  /*
  ** Point to resources
  */
  srcDir: resolve(__dirname, '..', 'resources'),


  /**
  *  Plugins
  */
  plugins: [{ src: '~/plugins/vue-carousel', ssr: false }, '~/plugins/filters'],

  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  }
}
