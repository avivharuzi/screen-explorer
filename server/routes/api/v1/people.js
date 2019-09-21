const express = require('express');
const router = express.Router();

const TmdbHandler = require('../../../handlers/tmdb.js');

router.get('/popular', (req, res) => {
  TmdbHandler.send(res, '/person/popular', req.query);
});

router.get('/:id', (req, res) => {
  TmdbHandler.send(res, `/person/${req.params.id}`, req.query, {
    append_to_response: 'combined_credits,external_ids,images,tagged_images',
  });
});

module.exports = router;
