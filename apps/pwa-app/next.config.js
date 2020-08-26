const withOffline = require('next-offline');
const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest),
};

module.exports = withOffline(nextConfig);
