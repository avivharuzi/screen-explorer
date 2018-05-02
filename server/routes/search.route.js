const express = require('express');
const router = express.Router();

const TmdbHandler = require('./../handlers/tmdb.handler');

router.get('/tv/:query/:pageNumber', (req, res) => {
    TmdbHandler.get('/search/tv', { query: req.params.query, page: req.params.pageNumber }, res);
});

router.get('/movie/:query/:pageNumber', (req, res) => {
    TmdbHandler.get('/search/movie', { query: req.params.query, page: req.params.pageNumber }, res);
});

router.get('/person/:query/:pageNumber', (req, res) => {
    TmdbHandler.get('/search/person', { query: req.params.query, page: req.params.pageNumber }, res);
});

router.get('/multi/:query/:pageNumber', (req, res) => {
    TmdbHandler.get('/search/multi', { query: req.params.query, page: req.params.pageNumber }, res);
});

module.exports = router;
