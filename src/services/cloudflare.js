// Singleton

const FormData = require('form-data')
const fs = require('fs')
const Client = require("./axios");
require('dotenv').config()

class CloudFlare extends Client {

    static instance;

    constructor() {
        super();
    }

    static getInstance() {
        if (!CloudFlare.instance) {
            CloudFlare.instance = new CloudFlare()
        }
        return CloudFlare.instance
    }

    uploadImage(path) {
        const formData = new FormData();
        formData.append('file', fs.readFileSync(path))
        this.client.post(
            `/accounts/${process.env.ID_ACCOUNT}/images/v1`,
            formData
        )
    }

    deleteImage(imageId) {
        return this.client.delete(`/accounts/${process.env.ID_ACCOUNT}/images/v1/${imageId}`)
    }

    getImages() {
        return this.client.get(`/accounts/${process.env.ID_ACCOUNT}/images/v1`)
    }

}

module.exports = CloudFlare
