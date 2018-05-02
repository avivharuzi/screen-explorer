const express = require('express');
const router = express.Router();

const TmdbHandler = require('./../handlers/tmdb.handler');

router.get('/discover/:pageNumber', (req, res) => {
    TmdbHandler.get('/discover/tv', { page: req.params.pageNumber }, res);
});

router.get('/popular/:pageNumber', (req, res) => {
    TmdbHandler.get('/tv/popular', { page: req.params.pageNumber }, res);
});

router.get('/top_rated/:pageNumber', (req, res) => {
    TmdbHandler.get('/tv/top_rated', { page: req.params.pageNumber }, res);
});

router.get('/genre', (req, res) => {
    TmdbHandler.get('/genre/tv/list', null, res);
});

router.get('/latest', (req, res) => {
    TmdbHandler.get('/tv/latest', null, res);
});

router.get('/:id', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}`, null, res);
});

router.get('/:id/credits', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/credits`, null, res);
});

router.get('/:id/images', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/images`, null, res);
});

router.get('/:id/videos', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/videos`, null, res);
});

router.get('/:id/recommendations/:pageNumber', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/recommendations`, { page: req.params.pageNumber }, res);
});

router.get('/:id/similar/:pageNumber', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/similar`, { page: req.params.pageNumber }, res);
});

router.get('/:id/season/:seasonNumber', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/season/${req.params.seasonNumber}`, null, res);
});

router.get('/:id/season/:seasonNumber/credits', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/season/${req.params.seasonNumber}/credits`, null, res);
});

router.get('/:id/season/:seasonNumber/images', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/season/${req.params.seasonNumber}/images`, null, res);
});

router.get('/:id/season/:seasonNumber/videos', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/season/${req.params.seasonNumber}/videos`, null, res);
});

router.get('/:id/season/:seasonNumber/episode/:episodeNumber', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/season/${req.params.seasonNumber}/episode/${req.params.episodeNumber}`, null, res);
});

router.get('/:id/season/:seasonNumber/episode/:episodeNumber/credits', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/season/${req.params.seasonNumber}/episode/${req.params.episodeNumber}/credits`, null, res);
});

router.get('/:id/season/:seasonNumber/episode/:episodeNumber/images', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/season/${req.params.seasonNumber}/episode/${req.params.episodeNumber}/images`, null, res);
});

router.get('/:id/season/:seasonNumber/episode/:episodeNumber/videos', (req, res) => {
    TmdbHandler.get(`/tv/${req.params.id}/season/${req.params.seasonNumber}/episode/${req.params.episodeNumber}/videos`, null, res);
});

module.exports = router;
