import { Application } from 'express';

import TMDBRouter from './modules/TMDB/TMDBRouter';

export default (app: Application): void => {
  app.use('/configurations', TMDBRouter.configurationsRouter);
  app.use('/movies', TMDBRouter.moviesRouter);
  app.use('/tv-shows', TMDBRouter.tvShowsRouter);
  app.use('/people', TMDBRouter.peopleRouter);
  app.use('/trends', TMDBRouter.trendsRouter);
  app.use('/search', TMDBRouter.searchRouter);
};
