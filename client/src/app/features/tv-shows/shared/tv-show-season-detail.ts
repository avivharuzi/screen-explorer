import { Cast } from '../../../shared/shared/cast';
import { Crew } from '../../../shared/shared/crew';
import { Poster } from '../../../shared/shared/poster';
import { Video } from '../../../shared/shared/video';

export interface Episode {
  air_date: string;
  crew: Crew[];
  episode_number: number;
  guest_stars: Cast[];
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

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export interface ExternalIds {
  freebase_id?: string;
  freebase_mid: string;
  tvdb_id: number;
  tvrage_id?: any;
}

export interface Images {
  posters: Poster[];
}

export interface Videos {
  results: Video[];
}

export interface TvShowSeasonDetail {
  _id: string;
  air_date: string;
  credits: Credits;
  episodes: Episode[];
  external_ids: ExternalIds;
  id: number;
  images: Images;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  videos: Videos;
}
