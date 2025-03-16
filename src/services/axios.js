const axios = require('axios')
require('dotenv').config()

class Client {
    client;

    constructor () {
        this.client = axios.create({
            baseURL: 'https://api.cloudflare.com/client/v4',
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`
            }
        });
    }
}

module.exports = Client