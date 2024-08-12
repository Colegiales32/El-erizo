/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        calibri : ['Calibri', 'sans-serif' ]
      },
      colors : {
        'oscuro' : '#272727',
        'claro' : '#474747',
        'rosa-claro' : '#FCDED3',
        'celeste' : '#54AFA6'
      },
      backgroundImage : {
        'fondo' : "url('/public/fondo.png)",
      }
    },
  },
  plugins: [],
}

