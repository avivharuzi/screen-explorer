const express = require('express');
const router = express.Router();

const TmdbHandler = require('./../handlers/tmdb.handler');

router.get('/latest', (req, res) => {
    TmdbHandler.get(`/person/latest`, null, res);
});

router.get('/popular/:pageNumber', (req, res) => {
    TmdbHandler.get(`/person/popular`, { page: req.params.pageNumber }, res);
});

router.get('/:id', (req, res) => {
    TmdbHandler.get(`/person/${req.params.id}`, null, res);
});

router.get('/:id/movie_credits', (req, res) => {
    TmdbHandler.get(`/person/${req.params.id}/movie_credits`, null, res);
});

router.get('/:id/tv_credits', (req, res) => {
    TmdbHandler.get(`/person/${req.params.id}/tv_credits`, null, res);
});

router.get('/:id/credits', (req, res) => {
    TmdbHandler.get(`/person/${req.params.id}/combined_credits`, null, res);
});

router.get('/:id/images', (req, res) => {
    TmdbHandler.get(`/person/${req.params.id}/images`, null, res);
});

router.get('/:id/tagged_images/:pageNumber', (req, res) => {
    TmdbHandler.get(`/person/${req.params.id}/tagged_images`, { page: req.params.pageNumber }, res);
});

module.exports = router;
