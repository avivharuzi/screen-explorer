import got from 'got';
import { StatusCodes } from 'http-status-codes';

import config from '../../config';
import errors from '../../errors';
import { Redis } from '../Shared/Redis';
import { ResponseError } from '../Shared/ResponseError';

export class TMDB {
  private static readonly SORT_MOVIE_OPTIONS: string[] = [
    'popularity.asc',
    'popularity.desc',
    'release_date.asc',
    'release_date.desc',
    'revenue.asc',
    'revenue.desc',
    'primary_release_date.asc',
    'primary_release_date.desc',
    'original_title.asc',
    'original_title.desc',
    'vote_average.asc',
    'vote_average.desc',
    'vote_count.asc',
    'vote_count.desc',
  ];

  private static readonly SORT_TV_OPTIONS: string[] = [
    'vote_average.desc',
    'vote_average.asc',
    'first_air_date.desc',
    'popularity.desc',
    'popularity.asc',
  ];

  static async getData(
    uri: string,
    // eslint-disable-next-line
    query: { [key: string]: any } = {},
    // eslint-disable-next-line
    extraQuery: { [key: string]: any } = {},
    useCache = true
    // eslint-disable-next-line
  ): Promise<any> {
    const searchParams = {
      // Common query params...
      api_key: config.tmdb.api.key,
      language: query.language
        ? query.language
        : config.tmdb.api.defaultLanguage,
      page: query.page ? query.page : 1,
      region: query.region ? query.region : config.tmdb.api.defaultRegion,
      // Dynamic query params...
      ...extraQuery,
    };

    const url = `${config.tmdb.api.url}/${uri}`; // Full request url.
    const cacheKey = `${url}${JSON.stringify(searchParams)}`; // Make a unique key by url and search params.

    try {
      if (useCache) {
        // eslint-disable-next-line
        const cacheValue = await Redis.getInstance().get<any>(cacheKey);

        if (cacheValue) {
          return cacheValue;
        }
      }
    } catch (err) {
      // If there was an error in getting cache value do nothing...
    }

    let body;

    try {
      const res = await got(url, { searchParams });
      body = JSON.parse(res.body);
    } catch (err) {
      if (err.response.statusCode === StatusCodes.NOT_FOUND) {
        throw new ResponseError(errors.notFound);
      }

      throw err;
    }

    try {
      if (useCache) {
        await Redis.getInstance().set(cacheKey, body);
        await Redis.getInstance().expire(cacheKey);
      }
    } catch (err) {
      // If there was an error in setting cache key with value do nothing...
    }

    return body;
  }

  // eslint-disable-next-line
  static getMovieDiscoverQuery(query: { [key: string]: any }): {
    [key: string]: string | boolean;
  } {
    return {
      sort_by: TMDB.SORT_MOVIE_OPTIONS.includes(query.sort_by)
        ? query.sort_by
        : '',
      certification_country: query.certification_country ?? '',
      certification: query.certification ?? '',
      'certification.lte': query['certification.lte'] ?? '',
      include_adult: query.include_adult ?? false,
      include_video: query.include_video ?? false,
      primary_release_year: query.primary_release_year ?? '',
      'primary_release_date.gte': query['primary_release_date.gte'] ?? '',
      'primary_release_date.lte': query['primary_release_date.lte'] ?? '',
      'release_date.gte': query['release_date.gte'] ?? '',
      'release_date.lte': query['release_date.lte'] ?? '',
      'vote_count.gte': query['vote_count.gte'] ?? '',
      'vote_count.lte': query['vote_count.lte'] ?? '',
      'vote_average.gte': query['vote_average.gte'] ?? '',
      'vote_average.lte': query['vote_average.lte'] ?? '',
      with_cast: query.with_cast ?? '',
      with_crew: query.with_crew ?? '',
      with_companies: query.with_companies ?? '',
      with_genres: query.with_genres ?? '',
      with_keywords: query.with_keywords ?? '',
      with_people: query.with_people ?? '',
      year: query.year ?? '',
      without_genres: query.without_genres ? query.without_genres : '',
      'with_runtime.gte': query['with_runtime.gte'] ?? '',
      'with_runtime.lte': query['with_runtime.lte'] ?? '',
      with_release_type: query.with_release_type ?? '',
      with_original_language: query.with_original_language ?? '',
      without_keywords: query.without_keywords ?? '',
    };
  }

  // eslint-disable-next-line
  static getTvDiscoverQuery(query: { [key: string]: any }): {
    [key: string]: string | boolean;
  } {
    return {
      sort_by: TMDB.SORT_TV_OPTIONS.includes(query.sort_by) ?? '',
      'air_date.gte': query['air_date.gte'] ?? '',
      'air_date.lte': query['air_date.lte'] ?? '',
      'first_air_date.gte': query['first_air_date.gte'] ?? '',
      'first_air_date.lte': query['first_air_date.lte'] ?? '',
      first_air_date_year: query['first_air_date_year'] ?? false,
      timezone: query.timezone ?? 'America/New_York',
      'vote_average.gte': query['vote_average.gte'] ?? '',
      'vote_count.gte': query['vote_count.gte'] ?? '',
      with_genres: query.with_genres ?? '',
      with_networks: query.with_networks ?? '',
      without_genres: query.without_genres ?? '',
      'with_runtime.gte': query['with_runtime.gte'] ?? '',
      'with_runtime.lte': query['with_runtime.lte'] ?? '',
      include_null_first_air_dates: query.include_null_first_air_dates ?? false,
      with_original_language: query.with_original_language ?? '',
      without_keywords: query.without_keywords ?? '',
      screened_theatrically: query.screened_theatrically ?? '',
      with_companies: query.with_companies ?? '',
    };
  }

  // eslint-disable-next-line
  static getSearchQuery(query: { [key: string]: any }): {
    [key: string]: string | boolean;
  } {
    return {
      query: query.query ?? '',
    };
  }

  static getIncludeImageLanguageQueryParam(query: {
    // eslint-disable-next-line
    [key: string]: any;
  }): string {
    return `${query.language ?? config.tmdb.api.defaultLanguage},null`;
  }
}
