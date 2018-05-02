const axios = require('axios');

const api = axios.create({
    baseURL: process.env.TMDB_BASE_URL,
    params: {
        api_key: process.env.TMDB_API_KEY,
        language: 'en-US'
    }
});

class TmdbHandler {
    static get(url, params = null, res) {
        return api.get(url, {
            params: params
        })
        .then(body => res.send(body.data))
        .catch(err => res.status(409).end());
    }
}

module.exports = TmdbHandler;
