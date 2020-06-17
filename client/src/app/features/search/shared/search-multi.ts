export enum MediaType {
  Movie = 'movie',
  Person = 'person',
  TV = 'tv',
}

export interface KnownFor {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface SearchMulti {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  gender?: number;
  genre_ids: number[];
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  media_type: MediaType;
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