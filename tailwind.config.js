/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      maxWidth:{
        '1.5xl': '39rem'
      },
      colors:{
      'gradResult1': 'hsl(252, 100%, 67%)',
      'gradResult2': 'hsl(241, 81%, 54%)',
      'gradCircle1': 'hsla(256, 72%, 46%, 1)',
      'gradCircle2': 'hsla(241, 72%, 46%, 0)',
      },
    },
  },
  plugins: [],
}