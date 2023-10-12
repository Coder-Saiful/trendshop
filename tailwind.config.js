/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    screens: {
      'xs1': '300px',
      // => @media (min-width: 300px) { ... }
      'xs2': '400px',
      // => @media (min-width: 400px) { ... }
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

