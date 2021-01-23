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
  buildModules: ['@nuxtjs/tailwindcss']
}