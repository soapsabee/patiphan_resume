/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'sm': '320px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        typing: "typing 2s steps(19), blink .7s infinite"
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
    },
    fontFamily: {
      sans: ['Kanit', 'sans-serif']
    },
    textColor: theme => { 
      return { 
        ...theme('colors'),
        'titleCustom': "#00C2CB"
      } 
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'bgCustom': '#00C2CB',
     }),
     borderColor: theme => ({
      ...theme('colors'),
       DEFAULT: theme('colors.gray.300', 'currentColor'),
       'bgCustom': '#00C2CB',
       'blackCustom': '#000000'
     })
  },
  plugins: [],
}

