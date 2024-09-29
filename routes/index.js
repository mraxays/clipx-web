var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ClipX JS — The Smarter Clipboard Solution' });
});
router.get('/sitemap.xml', function(req, res, next) {
  res.header('Content-Type', 'application/xml');

  const lastModifiedDate = '2024-09-29'; // Update this as necessary

  const sitemapXml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Home Page -->
      <url>
        <loc>${req.protocol}://${req.get('host')}/</loc>
        <lastmod>${lastModifiedDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>

      <!-- Section: Why ClipX -->
      <url>
        <loc>${req.protocol}://${req.get('host')}/#why</loc>
        <lastmod>${lastModifiedDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>

      <!-- Section: Documentation -->
      <url>
        <loc>${req.protocol}://${req.get('host')}/#document</loc>
        <lastmod>${lastModifiedDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>

      <!-- Section: Uses -->
      <url>
        <loc>${req.protocol}://${req.get('host')}/#uses</loc>
        <lastmod>${lastModifiedDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>

      <!-- Section: Installation -->
      <url>
        <loc>${req.protocol}://${req.get('host')}/#installation</loc>
        <lastmod>${lastModifiedDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
    </urlset>
  `;

  res.send(sitemapXml.trim());
});


module.exports = router;
