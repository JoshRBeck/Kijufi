const sitemap = require('sitemap');
const hostname = 'http://kinderrechte-filmfestival.de';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/program', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/error', changefreq: 'monthly', priority: 0.8 },
  { url: '/datenschutz', changefreq: 'monthly', priority: 0.8 },
  { url: '/impressum', changefreq: 'monthly', priority: 0.8 },
  { url: '/zeichnungen', changefreq: 'monthly', priority: 0.8 },
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});


const fs = require('fs');

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());

