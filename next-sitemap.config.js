/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.rdc-eco.com', // Remplacé
    generateRobotsTxt: true,
    exclude: ['/fr/article/*', '/api/*', '/admin/*'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.rdc-eco.com/sitemap.xml', // Remplacé
      ],
    },
  };