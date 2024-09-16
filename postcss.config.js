module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Solo activa PurgeCSS en producción
    ...(process.env.NODE_ENV === 'production'
      ? [require('@fullhuman/postcss-purgecss')({
          content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
          // Opcional: Puedes añadir configuraciones adicionales aquí si es necesario
        })]
      : [])
  ],
}
