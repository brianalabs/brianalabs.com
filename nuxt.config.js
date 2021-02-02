export default {
  telemetry: false,
  head: {
    title: '브리아나 - 가상화폐를 위한 인공지능 비서',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      },
      {
        name: 'description',
        content: '브리아나는 당신의 성공적인 코인 투자를 위한 인공지능 비서입니다. 머신러닝, 딥러닝으로 학습하는 브리아나의 강력한 기능을 무료로 사용해보세요.'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
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
    { src: '~/plugins/vue-gtag'}
    { src: '~/plugins/vue-scroll-reveal', ssr: false }
  ],
  modules: [
    ['vue-scrollto/nuxt', { duration: 1000, easing: 'ease' }],
  ],
  buildModules: ['@nuxtjs/tailwindcss']
}