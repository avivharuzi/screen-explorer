const express = require('express');
const router = express.Router();

const TmdbHandler = require('./../handlers/tmdb.handler');

router.get('/discover/:pageNumber', (req, res) => {
    TmdbHandler.get('/discover/tv', { page: req.params.pageNumber }, res);

});

router.get('/genre', (req, res) => {
    TmdbHandler.get('/genre/tv/list', null, res);
});

module.exports = router;
