module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        bg: '#15294C',
        sbg: '#f5fafd',
        mainColor: '#03a9f4',
        sidebar: '#222B34',
      },
      transitionProperty: {
        position: 'position',
      },
      colors: {
        main: '#03a9f4',
        text: '#0c2631',
        Bold: '#07161d',
        hover: '#f5fafd',
      },
      borderColor: {
        main: '#03a9f4',
      },
      height: {
        s: '60vh',
      },
      width: {
        '1/5': '25%',
      },
      fontWeight: {
        300: '300',
        700: '700',
      },
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        primary: '#03a9f4',
        secondary: '#15294C',
      }),
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [],
};
