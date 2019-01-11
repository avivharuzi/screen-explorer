const express = require('express');
const router = express.Router();

const movie = require('./movie');
const tv = require('./tv');
const people = require('./people');

router.use('/movie', movie);
router.use('/tv', tv);
router.use('/people', people);

module.exports = router;
