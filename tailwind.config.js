/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        calibri : ['Poiret One', 'sans-serif' ],
        caveat : ['Caveat', 'sans-serif' ]
        
      },
      colors : {
        'oscuro' : '#000000',
        'claro' : '#272727',
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

