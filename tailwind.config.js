/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      flex: {
        '0.8': '0.8',
        '0.3': '0.3'
      },
      fontFamily:{
        'overpass':'Overpass'
      },
      backgroundColor:{
        'dark-gray':'hsl(237, 17%, 21%)',
        'light-red':'hsl(356, 100%, 66%)'
      },

      backgroundSize: {
        '110': '110rem',
      },
      marginTop: {
        '-24': '-6rem' /* -96px */
      },
      colors:{
        'dark-gray': 'hsl(237, 17%, 21%)'
      },
      width: {
        '30': '7.5rem',
        '120': '30rem',
        '125': '31.25rem',
        '140': '35rem',
        '225': '56.25rem',
        '300': '75rem'
      },
      height: {
        '30': '7.5rem',
        '120': '30rem',
        '125': '31.25rem',
        '140': '35rem',
        '183': '45.75rem',
        '225': '56.25rem',
        '300': '75rem'
      },
      borderRadius: {
        '4xl': '2.5rem'
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    }
  },
  plugins: [],
}

