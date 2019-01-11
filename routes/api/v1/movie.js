const express = require('express');
const router = express.Router();

const TmdbHandler = require('./../../../handlers/tmdb.js');

router.get('/discover', (req, res) => {
  const extraQuery = TmdbHandler.getMovieDiscoverQuery(req.query);

  TmdbHandler.send(res, '/discover/movie', req.query, extraQuery);
});

router.get('/now-playing', (req, res) => {
  TmdbHandler.send(res, '/movie/now_playing', req.query);
});

router.get('/popular', (req, res) => {
  TmdbHandler.send(res, '/movie/popular', req.query);
});

router.get('/top-rated', (req, res) => {
  TmdbHandler.send(res, '/movie/top_rated', req.query);
});

router.get('/upcoming', (req, res) => {
  TmdbHandler.send(res, '/movie/upcoming', req.query);
});

router.get('/:id', (req, res) => {
  TmdbHandler.send(res, `/movie/${req.params.id}`, req.query, {
    append_to_response: 'videos,images,external_ids,credits,keywords'
  });
});

router.get('/:id/similar', (req, res) => {
  TmdbHandler.send(res, `/movie/${req.params.id}/similar`, req.query);
});

module.exports = router;
