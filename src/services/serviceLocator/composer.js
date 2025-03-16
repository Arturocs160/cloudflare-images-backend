const { getInstance } = require('./dependencyLocator')
const CloudFlare = require('../cloudflare')

const serviceLocator = getInstance();

function init() {
    serviceLocator.bindLazyFactory('cloudflare', () => CloudFlare.getInstance());
}

module.exports = { init }