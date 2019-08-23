interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path ?: any;
}

interface Genre {
  id: number;
  name: string;
}

interface LastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface Result {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

interface Videos {
  results: Result[];
}

interface Images {
  backdrops: any[];
  posters: any[];
}

interface ExternalIds {
  imdb_id: string;
  freebase_mid ?: any;
  freebase_id ?: any;
  tvdb_id: number;
  tvrage_id: number;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

interface Cast {
  character: string;
  credit_id: string;
  id: number;
  name: string;
  gender: number;
  profile_path: string;
  order: number;
}

interface Crew {
  credit_id: string;
  department: string;
  id: number;
  name: string;
  gender: number;
  job: string;
  profile_path: string;
}

interface Credits {
  cast: Cast[];
  crew: Crew[];
}

interface Result2 {
  name: string;
  id: number;
}

interface Keywords {
  results: Result2[];
}

export interface TvDetail {
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  next_episode_to_air ?: any;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  seasons: Season[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
  videos: Videos;
  images: Images;
  external_ids: ExternalIds;
  credits: Credits;
  keywords: Keywords;
}
