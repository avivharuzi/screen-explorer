const express = require('express');
const router = express.Router();

const TmdbHandler = require('./../handlers/tmdb.handler');

router.get('/discover/:pageNumber', (req, res) => {
    TmdbHandler.get('/discover/movie', { page: req.params.pageNumber }, res);
});

router.get('/now_playing/:pageNumber', (req, res) => {
    TmdbHandler.get('/movie/now_playing', { page: req.params.pageNumber }, res);
});

router.get('/popular/:pageNumber', (req, res) => {
    TmdbHandler.get('/movie/popular', { page: req.params.pageNumber }, res);
});

router.get('/top_rated/:pageNumber', (req, res) => {
    TmdbHandler.get('/movie/top_rated', { page: req.params.pageNumber }, res);
});

router.get('/upcoming/:pageNumber', (req, res) => {
    TmdbHandler.get('/movie/upcoming', { page: req.params.pageNumber }, res);
});

router.get('/genre', (req, res) => {
    TmdbHandler.get('/genre/movie/list', null, res);
});

router.get('/lates', (req, res) => {
    TmdbHandler.get('/movie/latest', null, res);
});

router.get('/:id', (req, res) => {
    TmdbHandler.get(`/movie/${req.params.id}`, null, res);
});

router.get('/:id/credits', (req, res) => {
    TmdbHandler.get(`/movie/${req.params.id}/credits`, null, res);
});

router.get('/:id/images', (req, res) => {
    TmdbHandler.get(`/movie/${req.params.id}/images`, null, res);
});

router.get('/:id/videos', (req, res) => {
    TmdbHandler.get(`/movie/${req.params.id}/videos`, null, res);
});

router.get('/:id/recommendations/:pageNumber', (req, res) => {
    TmdbHandler.get(`/movie/${req.params.id}/recommendations`, { page: req.params.pageNumber }, res);
});

router.get('/:id/similar/:pageNumber', (req, res) => {
    TmdbHandler.get(`/movie/${req.params.id}/similar`, { page: req.params.pageNumber }, res);
});

router.get('/:id/lists/:pageNumber', (req, res) => {
    TmdbHandler.get(`/movie/${req.params.id}/lists`, { page: req.params.pageNumber }, res);
});

module.exports = router;
