const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ]
  },
  theme: {
    screens: {
      md: '768px',
      lg: '1040px'
    },
    colors: {
      transparent: 'transparent',
      primary: {
        100: "#f9d2da",
        200: "#f3a5b6",
        300: "#ed7791",
        400: "#e74a6d",
        500: "#e11d48",
        600: "#b4173a",
        700: "#87112b",
        800: "#5a0c1d",
        900: "#2d060e"
      },
      gray: colors.trueGray,
      red: colors.red,
      green: colors.green
    },
    fontSize: {
      '2xs': '0.625rem',
      ...defaultTheme.fontSize
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji'
      ],
      mono: [...defaultTheme.fontFamily.mono]
    }
  },
  variants: {
    extend: {
      borderColor: ''
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}