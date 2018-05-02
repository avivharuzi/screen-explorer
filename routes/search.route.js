const express = require('express');
const router = express.Router();

const TmdbHandler = require('./../handlers/tmdb.handler');

router.get('/tv/:query', (req, res) => {
    TmdbHandler.get('/search/tv', { query: req.params.query }, res);
});

router.get('/movie/:query', (req, res) => {
    TmdbHandler.get('/search/movie', { query: req.params.query }, res);
});

router.get('/person/:query', (req, res) => {
    TmdbHandler.get('/search/person', { query: req.params.query }, res);
});

router.get('/multi/:query', (req, res) => {
    TmdbHandler.get('/search/multi', { query: req.params.query }, res);
});

module.exports = router;
