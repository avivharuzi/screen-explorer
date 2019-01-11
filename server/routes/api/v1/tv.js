const express = require('express');
const router = express.Router();

const TmdbHandler = require('../../../handlers/tmdb.js');

router.get('/discover', (req, res) => {
  const extraQuery = TmdbHandler.getTvDiscoverQuery(req.query);

  TmdbHandler.send(res, '/discover/tv', req.query, extraQuery);
});

router.get('/airing-today', (req, res) => {
  TmdbHandler.send(res, '/tv/airing_today', req.query);
});

router.get('/on-the-air', (req, res) => {
  TmdbHandler.send(res, '/tv/on_the_air', req.query);
});

router.get('/popular', (req, res) => {
  TmdbHandler.send(res, '/tv/popular', req.query);
});

router.get('/top-rated', (req, res) => {
  TmdbHandler.send(res, '/tv/top_rated', req.query);
});

router.get('/:id', (req, res) => {
  TmdbHandler.send(res, `/tv/${req.params.id}`, req.query, {
    append_to_response: 'videos,images,external_ids,credits,keywords'
  });
});

router.get('/:id/similar', (req, res) => {
  TmdbHandler.send(res, `/tv/${req.params.id}/similar`, req.query);
});

router.get('/:id/season/:seasonNumber', (req, res) => {
  TmdbHandler.send(res, `/tv/${req.params.id}/season/${req.params.seasonNumber}`, req.query, {
    append_to_response: 'credits,external_ids,images,videos'
  });
});

router.get('/:id/season/:seasonNumber/episode/:episodeNumber', (req, res) => {
  TmdbHandler.send(res, `/tv/${req.params.id}/season/${req.params.seasonNumber}/episode/${req.params.episodeNumber}`, req.query, {
    append_to_response: 'credits,external_ids,images,videos'
  });
});

module.exports = router;
