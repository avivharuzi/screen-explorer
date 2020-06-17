import { KnownFor } from '../../../shared/shared/known-for';

export interface Trend {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  gender?: number;
  genre_ids: number[];
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  profile_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}