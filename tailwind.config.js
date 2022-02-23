module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs' : '375px',
      'sm': '650px',
      // => @media (min-width: 650px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      'Sailec' : 'SailecRegular',
      'SailecM' : 'SailecMedium',
      'HermannSB' : 'HermannSB',
      'HermannSBI' : 'HermannSBI',
    },

    extend: {
      spacing: {
        30 : '7.5rem',
        0.75 : '0.188rem',
        2.5 : '0.75rem',
        26 : '6.5rem',
        1.5 : '0.375rem',
        7.5 : '1.875rem',
        2.25 : '0.625rem',
        15 : '3.75rem',
        18: '4.5rem',
        7 : '1.75rem',
      },
      colors: {
        current: '#003057',
        'blue-light': 'rgb(245, 249, 255)',
        'blue' : '#3369FF',
        'royal-blue': '#26459B',
        'navy-blue' : '#4D6E89',
        'peach-orange' : 'rgb(255, 211, 150)',
        'malibu-blue' : 'rgb(139, 188, 255)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}