module.exports = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest),
};
