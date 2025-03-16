const CloudFlare = require('../services/cloudflare')

function onNewImages(path) {
    const cloudFlare = CloudFlare.getInstance();
    return cloudFlare.uploadImage(path);
}

function deleteImages(imageId) {
    const cloudFlare = CloudFlare.getInstance();
    return cloudFlare.deleteImage(imageId);
}



module.exports = {
    onNewImages,
    deleteImages
}