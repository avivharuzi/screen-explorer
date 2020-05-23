import { Application } from 'express';

import TMDBRouter from './modules/TMDB/TMDBRouter';

export default (app: Application): void => {
  app.use('/configurations', TMDBRouter.configurationRouter);
  app.use('/movies', TMDBRouter.movieRouter);
  app.use('/tv-shows', TMDBRouter.tvRouter);
  app.use('/people', TMDBRouter.peopleRouter);
  app.use('/trending', TMDBRouter.trendingRouter);
  app.use('/search', TMDBRouter.searchRouter);
};
