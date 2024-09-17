var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ClipX JS — The Smarter Clipboard Solution' });
});
router.get('/sitemap.xml', function(req, res, next) {
  res.header('Content-Type', 'application/xml');

  const lastModifiedDate = '2024-09-25';

  const sitemapXml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${req.protocol}://${req.get('host')}/</loc>
        <lastmod>${lastModifiedDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>
  `;

  res.send(sitemapXml.trim()); 
});


module.exports = router;
