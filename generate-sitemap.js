const axios = require('axios');
const { Builder } = require('xml2js');
const fs = require('fs');

const generateSitemap = async () => {
  try {
    // Fai una richiesta all'API per ottenere l'elenco dei prodotti
    const response = await axios.get('https://rep-api.onrender.com/api/products/search');
    
    // Estrai gli _id dai dati ricevuti
    const productIds = response.data.productDocs.map(product => product._id);

    // Aggiungi manualmente altre pagine
    const additionalPages = ['/home', '/trova', '/login', '/register'];

    // Forma gli URL per i prodotti con /products/id
    const productUrls = productIds.map(productId => `/products/${productId}`);

    // Combina gli URL dei prodotti con le pagine aggiuntive
    const allPages = [...productUrls, ...additionalPages];

    // Crea l'oggetto della sitemap
    const sitemapObject = {
      urlset: {
        _attributes: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' },
        url: allPages.map(page => ({
          loc: `https://w2c.space${page}`,
          lastmod: new Date().toISOString(),
          changefreq: 'daily',
          priority: '0.7',
        })),
      },
    };

    // Converti l'oggetto in XML utilizzando xml2js
    const builder = new Builder();
    const sitemapXML = builder.buildObject(sitemapObject);

    // Scrivi il file XML nella cartella /public
    fs.writeFileSync('./public/sitemap.xml', sitemapXML);

    console.log('Sitemap generated and saved to /public/sitemap.xml');
  } catch (error) {
    console.error('Error generating sitemap:', error.message);
  }
};

generateSitemap();
