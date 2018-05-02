const movieRoute = require('./movie.route');
const tvRoute = require('./tv.route');
const searchRoute = require('./search.route');

module.exports = app => {
    app.use('/api/movie', movieRoute);
    app.use('/api/tv', tvRoute);
    app.use('/api/search', searchRoute);
};
