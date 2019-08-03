const axios = require('axios');

const apiUrl = process.env.TMDB_API_URL;
const apiKey = process.env.TMDB_API_KEY;
const apiDefaultLanguage = process.env.TMDB_API_DEFAULT_LANGUAGE;
const apiDefaultRegion = process.env.TMDB_API_DEFAULT_REGION;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  params: {
    api_key: apiKey
  }
});

const sortMovieOptions = [
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
  'vote_count.desc'
];

const sortTvOptions = [
  'vote_average.desc',
  'vote_average.asc',
  'first_air_date.desc',
  'popularity.desc',
  'popularity.asc'
];

class TmdbHandler {
  static async send(res, uri, query, extraQuery = {}) {
    const params = {
      language: query.language ? query.language : apiDefaultLanguage,
      page: query.page ? query.page : 1,
      region: query.region ? query.region : apiDefaultRegion,
      ...extraQuery
    };

    try {
      const body = await axiosInstance.get(uri, {
        params: params
      });

      res.send(body.data);
    } catch (err) {
      res.status(409).end();
    }
  }

  static getMovieDiscoverQuery(query) {
    return {
      sort_by: sortMovieOptions.includes(query.sort_by) ? query.sort_by : '',
      certification_country: query.certification_country ? query.certification_country : '',
      certification: query.certification ? query.certification : '',
      'certification.lte': query['certification.lte'] ? query['certification.lte'] : '',
      include_adult: query.include_adult ? query.include_adult : false,
      include_video: query.include_video ? query.include_video : false,
      primary_release_year: query.primary_release_year ? query.primary_release_year : '',
      'primary_release_date.gte': query['primary_release_date.gte'] ? query['primary_release_date.gte'] : '',
      'primary_release_date.lte': query['primary_release_date.lte'] ? query['primary_release_date.lte'] : '',
      'release_date.gte': query['release_date.gte'] ? query['release_date.gte'] : '',
      'release_date.lte': query['release_date.lte'] ? query['release_date.lte'] : '',
      'vote_count.gte': query['vote_count.gte'] ? query['vote_count.gte'] : '',
      'vote_count.lte': query['vote_count.lte'] ? query['vote_count.lte'] : '',
      'vote_average.gte': query['vote_average.gte'] ? query['vote_average.gte'] : '',
      'vote_average.lte': query['vote_average.lte'] ? query['vote_average.lte'] : '',
      with_cast: query.with_cast ? query.with_cast : '',
      with_crew: query.with_crew ? query.with_crew : '',
      with_companies: query.with_companies ? query.with_companies : '',
      with_genres: query.with_genres ? query.with_genres : '',
      with_keywords: query.with_keywords ? query.with_keywords : '',
      with_people: query.with_people ? query.with_people : '',
      year: query.year ? query.year : '',
      without_genres: query.without_genres ? query.without_genres : '',
      'with_runtime.gte': query['with_runtime.gte'] ? query['with_runtime.gte'] : '',
      'with_runtime.lte': query['with_runtime.lte'] ? query['with_runtime.lte'] : '',
      with_release_type: query.with_release_type ? query.with_release_type : '',
      with_original_language: query.with_original_language ? query.with_original_language : '',
      without_keywords: query.without_keywords ? query.without_keywords : ''
    };
  }

  static getTvDiscoverQuery(query) {
    return {
      sort_by: sortTvOptions.includes(query.sort_by) ? query.sort_by : '',
      'air_date.gte': query['air_date.gte'] ? query['air_date.gte'] : '',
      'air_date.lte': query['air_date.lte'] ? query['air_date.lte'] : '',
      'first_air_date.gte': query['first_air_date.gte'] ? query['first_air_date.gte'] : '',
      'first_air_date.lte': query['first_air_date.lte'] ? query['first_air_date.lte'] : '',
      'first_air_date_year': query['first_air_date_year'] ? query['first_air_date_year'] : false,
      timezone: query.timezone ? query.timezone : 'America/New_York',
      'vote_average.gte': query['vote_average.gte'] ? query['vote_average.gte'] : '',
      'vote_count.gte': query['vote_count.gte'] ? query['vote_count.gte'] : '',
      with_genres: query.with_genres ? query.with_genres : '',
      with_networks: query.with_networks ? query.with_networks : '',
      without_genres: query.without_genres ? query.without_genres : '',
      'with_runtime.gte': query['with_runtime.gte'] ? query['with_runtime.gte'] : '',
      'with_runtime.lte': query['with_runtime.lte'] ? query['with_runtime.lte'] : '',
      include_null_first_air_dates: query.include_null_first_air_dates ? query.include_null_first_air_dates : false,
      with_original_language: query.with_original_language ? query.with_original_language : '',
      without_keywords: query.without_keywords ? query.without_keywords : '',
      screened_theatrically: query.screened_theatrically ? query.screened_theatrically : '',
      with_companies: query.with_companies ? query.with_companies : ''
    };
  }
}

module.exports = TmdbHandler;
