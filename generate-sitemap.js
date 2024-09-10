const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Asegúrate de que estas rutas son correctas para tu aplicación
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  // Añade más rutas según sea necesario
];

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml'); // Cambia la ruta si es necesario

const sitemapStream = new SitemapStream({ hostname: 'https://www.elerizo.com/' });
const writeStream = createWriteStream(sitemapPath);

// Manejo de errores en la escritura del archivo
writeStream.on('error', (err) => {
  console.error('Error escribiendo el sitemap:', err);
});

sitemapStream.pipe(writeStream);

// Añadir los enlaces al sitemap
links.forEach((link) => {
  sitemapStream.write(link);
});

// Finalizar el stream
sitemapStream.end();

console.log('Sitemap generado correctamente en:', sitemapPath);
