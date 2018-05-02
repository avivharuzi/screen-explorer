const movieRoute = require('./movie.route');
const tvRoute = require('./tv.route');

module.exports = app => {
    app.use('/api/movie', movieRoute);
    app.use('/api/tv', tvRoute);
};
