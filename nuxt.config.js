const TITLE = '브리아나 - 가상화폐를 위한 인공지능 비서'
const DESCRIPTION = '브리아나는 당신의 성공적인 코인 투자를 위한 인공지능 비서입니다. 머신러닝, 딥러닝으로 학습하는 브리아나의 강력한 기능을 무료로 사용해보세요.'
const BASE_URL = 'https://www.brianalabs.com'

export default {
  telemetry: false,
  head: {
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      },
      // SEO
      {
        name: 'description',
        content: DESCRIPTION
      },
      {
        name: 'keywords',
        content: '브리아나, 가상화폐, 비트코인, 코인거래, 코인매매, 코인자동매매, 이더리움, 리플, 이오스, 모니터링'
      },
      // Open Graph
      {
        property: 'og:title',
        content: TITLE
      },
      {
        property: 'og:description',
        content: DESCRIPTION
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: BASE_URL
      },
      // Twitter
      {
        property: 'twitter:title',
        content: TITLE,
      },
      {
        property: 'twitter:description',
        content: DESCRIPTION,
      },
      {
        property: 'twitter:site',
        content: BASE_URL,
      },
      {
        property: 'twitter:creator',
        content: 'Briana Labs',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: BASE_URL
      },
      {
        rel: 'shortcut icon',
        href:
          '/favicon.png'
      },
      {
        rel: 'apple-touch-icon',
        href:
          '/favicon.png'
      },
      {
        rel: 'icon',
        href:
          '/favicon.png'
      }
    ]
  },
  components: [
    { path: '~/components', prefix: 'vue' },
  ],
  env: process.env,
  plugins: [
    { src: '~/plugins/vue-gtag'},
    { src: '~/plugins/vue-scroll-reveal', ssr: false }
  ],
  modules: [
    ['vue-scrollto/nuxt', { duration: 1000, easing: 'ease' }],
    '@nuxtjs/sitemap'
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
  sitemap: {
    hostname: BASE_URL
  }
}