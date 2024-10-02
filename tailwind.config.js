/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {

    extend: {
     boxShadow:{
      'qw':'0px 0px 8px 0px  #7d12ff',
      'dar':'0px 0px 10px 0px #200589',
      'gray':'0px 0px 5px 0px #808080 inset',
      'lr':'inset 0px 5px 15px rgba(0, 0, 0, 0.1),0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
     },



      colors:{

        darkPurple:'#200589',
        neonPurple:'#7d12ff',
        lightPurple:'#ab20fd',
        lightWhite:'#fbf8fd',

      },
    },
    fontFamily: {
      'body': [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ]
    },
    textShadow: {
      sm: '1px 1px 2px var(--tw-shadow-color)',
      DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
      lg: '4px 4px 8px var(--tw-shadow-color)',
      xl: '4px 4px 16px var(--tw-shadow-color)',
    },
  },
  plugins: [plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  })
],
}

