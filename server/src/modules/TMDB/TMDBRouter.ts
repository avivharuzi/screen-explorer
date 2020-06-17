import { Request, Response, Router } from 'express';

import { TMDB } from './TMDB';
import { TMDBHandler } from './TMDBHandler';

const configurationsRouter: Router = Router();
const moviesRouter: Router = Router();
const peopleRouter: Router = Router();
const searchRouter: Router = Router();
const trendsRouter: Router = Router();
const tvShowsRouter: Router = Router();

/**
 * =================================
 * ===== Configurations Router =====
 * =================================
 */
configurationsRouter.get('/', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration');
});

configurationsRouter.get('/countries', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/countries');
});

configurationsRouter.get('/jobs', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/jobs');
});

configurationsRouter.get('/languages', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/languages');
});

configurationsRouter.get('/primary-translations', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/primary_translations');
});

configurationsRouter.get('/timezones', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/timezones');
});

/**
 * =========================
 * ===== Movies Router =====
 * =========================
 */
moviesRouter.get('/discover', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'discover/movie', TMDB.getMovieDiscoverQuery(req.query));
});

moviesRouter.get('/genres', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'genre/movie/list');
});

moviesRouter.get('/now-playing', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'movie/now_playing');
});

moviesRouter.get('/popular', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'movie/popular');
});

moviesRouter.get('/top-rated', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'movie/top_rated');
});

moviesRouter.get('/upcoming', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'movie/upcoming');
});

moviesRouter.get('/:id', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `movie/${req.params.id}`, {
    // eslint-disable-next-line
    append_to_response: 'videos,images,external_ids,credits,keywords,release_dates',
    // eslint-disable-next-line
    include_image_language: TMDB.getIncludeImageLanguageQueryParam(req.query),
  });
});

moviesRouter.get('/:id/similar', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `movie/${req.params.id}/similar`);
});

/**
 * ===========================
 * ===== TV Shows Router =====
 * ===========================
 */
tvShowsRouter.get('/discover', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'discover/tv', TMDB.getTvDiscoverQuery(req.query));
});

tvShowsRouter.get('/genres', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'genre/tv/list');
});

tvShowsRouter.get('/airing-today', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'tv/airing_today');
});

tvShowsRouter.get('/on-the-air', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'tv/on_the_air');
});

tvShowsRouter.get('/popular', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'tv/popular');
});

tvShowsRouter.get('/top-rated', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'tv/top_rated');
});

tvShowsRouter.get('/:id', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `tv/${req.params.id}`, {
    // eslint-disable-next-line
    append_to_response: 'videos,images,external_ids,credits,keywords',
    // eslint-disable-next-line
    include_image_language: TMDB.getIncludeImageLanguageQueryParam(req.query),
  });
});

tvShowsRouter.get('/:id/similar', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `tv/${req.params.id}/similar`);
});

tvShowsRouter.get('/:id/season/:seasonNumber', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `tv/${req.params.id}/season/${req.params.seasonNumber}`, {
    // eslint-disable-next-line
    append_to_response: 'credits,external_ids,images,videos',
    // eslint-disable-next-line
    include_image_language: TMDB.getIncludeImageLanguageQueryParam(req.query),
  });
});

tvShowsRouter.get('/:id/season/:seasonNumber/episode/:episodeNumber', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `tv/${req.params.id}/season/${req.params.seasonNumber}/episode/${req.params.episodeNumber}`, {
    // eslint-disable-next-line
    append_to_response: 'credits,external_ids,images,videos',
    // eslint-disable-next-line
    include_image_language: TMDB.getIncludeImageLanguageQueryParam(req.query),
  });
});

/**
 * =========================
 * ===== People Router =====
 * =========================
 */
peopleRouter.get('/popular', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'person/popular');
});

peopleRouter.get('/:id', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `person/${req.params.id}`, {
    // eslint-disable-next-line
    append_to_response: 'combined_credits,external_ids,images,tagged_images',
  });
});

/**
 * =========================
 * ===== Trends Router =====
 * =========================
 */
// mediaType: 'all' | 'movie' | 'tv' | 'person'
// timeWindow: 'week' | 'day'
trendsRouter.get('/:mediaType/:timeWindow', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `trending/${req.params.mediaType}/${req.params.timeWindow}`);
});

/**
 * =========================
 * ===== Search Router =====
 * =========================
 */
// mediaType: 'multi' | 'movie' | 'tv' | 'person'
searchRouter.get('/:mediaType', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `search/${req.params.mediaType}`, TMDB.getSearchQuery(req.query));
});

export default {
  configurationsRouter,
  moviesRouter,
  peopleRouter,
  searchRouter,
  trendsRouter,
  tvShowsRouter,
};
