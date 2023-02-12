/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      screens: {
        xsm: '480px',
        sm: '550px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        colors: {
          'main': 'hsla(10, 0%, 95%, 1)',
          'accent': '#606c94',
          'contact': 'red',
          'menu': '#123196',
          'text': 'hsla(10, 0%, 20%, 1)',
          'text-light': 'white',
          'dropdown': '#242D37',
          'line': 'black',
          'footer-bg': '#242D37',
          'footer-text': 'grey',
        },
        height: {
          'screen-width': '100vw'
        }
    },
},
  plugins: [],
}
