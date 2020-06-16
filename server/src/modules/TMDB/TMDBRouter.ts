import { Request, Response, Router } from 'express';

import { TMDB } from './TMDB';
import { TMDBHandler } from './TMDBHandler';

const configurationRouter: Router = Router();
const movieRouter: Router = Router();
const tvRouter: Router = Router();
const peopleRouter: Router = Router();
const trendingRouter: Router = Router();
const searchRouter: Router = Router();

/**
 * ================================
 * ===== Configuration Router =====
 * ================================
 */
configurationRouter.get('/', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration');
});

configurationRouter.get('/countries', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/countries');
});

configurationRouter.get('/jobs', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/jobs');
});

configurationRouter.get('/languages', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/languages');
});

configurationRouter.get('/primary-translations', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/primary_translations');
});

configurationRouter.get('/timezones', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'configuration/timezones');
});

/**
 * ========================
 * ===== Movie Router =====
 * ========================
 */
movieRouter.get('/discover', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'discover/movie', TMDB.getMovieDiscoverQuery(req.query));
});

movieRouter.get('/genres', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'genre/movie/list');
});

movieRouter.get('/now-playing', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'movie/now_playing');
});

movieRouter.get('/popular', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'movie/popular');
});

movieRouter.get('/top-rated', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'movie/top_rated');
});

movieRouter.get('/upcoming', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'movie/upcoming');
});

movieRouter.get('/:id', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `movie/${req.params.id}`, {
    // eslint-disable-next-line
    append_to_response: 'videos,images,external_ids,credits,keywords,release_dates',
    // eslint-disable-next-line
    include_image_language: TMDB.getIncludeImageLanguageQueryParam(req.query),
  });
});

movieRouter.get('/:id/similar', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `movie/${req.params.id}/similar`);
});

/**
 * =====================
 * ===== TV Router =====
 * =====================
 */
tvRouter.get('/discover', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'discover/tv', TMDB.getTvDiscoverQuery(req.query));
});

tvRouter.get('/genres', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'genre/tv/list');
});

tvRouter.get('/airing-today', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'tv/airing_today');
});

tvRouter.get('/on-the-air', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'tv/on_the_air');
});

tvRouter.get('/popular', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'tv/popular');
});

tvRouter.get('/top-rated', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'tv/top_rated');
});

tvRouter.get('/:id', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `tv/${req.params.id}`, {
    // eslint-disable-next-line
    append_to_response: 'videos,images,external_ids,credits,keywords',
    // eslint-disable-next-line
    include_image_language: TMDB.getIncludeImageLanguageQueryParam(req.query),
  });
});

tvRouter.get('/:id/similar', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `tv/${req.params.id}/similar`);
});

tvRouter.get('/:id/season/:seasonNumber', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `tv/${req.params.id}/season/${req.params.seasonNumber}`, {
    // eslint-disable-next-line
    append_to_response: 'credits,external_ids,images,videos',
    // eslint-disable-next-line
    include_image_language: TMDB.getIncludeImageLanguageQueryParam(req.query),
  });
});

tvRouter.get('/:id/season/:seasonNumber/episode/:episodeNumber', async (req: Request, res: Response) => {
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
 * ===========================
 * ===== Trending Router =====
 * ===========================
 */
// mediaType: 'all' | 'movie' | 'tv' | 'person'
// timeWindow: 'week' | 'day'
trendingRouter.get('/:mediaType/:timeWindow', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, `trending/${req.params.mediaType}/${req.params.timeWindow}`);
});

/**
 * =========================
 * ===== Search Router =====
 * =========================
 */
searchRouter.get('/multi', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'search/multi', TMDB.getSearchQuery(req.query));
});

searchRouter.get('/movie', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'search/movie', TMDB.getSearchQuery(req.query));
});

searchRouter.get('/tv', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'search/tv', TMDB.getSearchQuery(req.query));
});

searchRouter.get('/person', async (req: Request, res: Response) => {
  await TMDBHandler.handleReq(req, res, 'search/person', TMDB.getSearchQuery(req.query));
});

export default {
  configurationRouter,
  movieRouter,
  tvRouter,
  peopleRouter,
  trendingRouter,
  searchRouter,
};
