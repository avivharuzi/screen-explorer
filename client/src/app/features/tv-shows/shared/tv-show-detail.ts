import { Backdrop } from '../../../shared/shared/backdrop';
import { Cast } from '../../../shared/shared/cast';
import { Crew } from '../../../shared/shared/crew';
import { Genre } from '../../../shared/shared/genre';
import { Keyword } from '../../../shared/shared/keyword';
import { Poster } from '../../../shared/shared/poster';
import { ProductionCompany } from '../../../shared/shared/production-company';
import { Video } from '../../../shared/shared/video';

export interface CreatedBy {
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
}

export interface LastEpisodeToAir {
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

export interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface Videos {
  results: Video[];
}

export interface Images {
  backdrops: Backdrop[];
  posters: Poster[];
}

export interface ExternalIds {
  facebook_id: string;
  freebase_id?: any;
  freebase_mid: string;
  imdb_id: string;
  instagram_id: string;
  tvdb_id: number;
  tvrage_id: number;
  twitter_id: string;
}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export interface Keywords {
  results: Keyword[];
}

export interface TvShowDetail {
  backdrop_path: string;
  created_by: CreatedBy[];
  credits: Credits;
  episode_run_time: number[];
  external_ids: ExternalIds;
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  images: Images;
  in_production: boolean;
  keywords: Keywords;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  networks: Network[];
  next_episode_to_air?: any;
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
  videos: Videos;
  vote_average: number;
  vote_count: number;
}
