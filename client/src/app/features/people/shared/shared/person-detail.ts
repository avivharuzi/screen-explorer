import { Profile } from '../../../../shared/shared/profile';

export interface Cast {
  adult: boolean;
  backdrop_path: string;
  character: string;
  credit_id: string;
  episode_count?: number;
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
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Crew {
  adult: boolean;
  backdrop_path: string;
  credit_id: string;
  department: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  job: string;
  media_type: string;
  name: string;
  original_language: string;
  original_name: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface CombinedCredits {
  cast: Cast[];
  crew: Crew[];
}

export interface Images {
  profiles: Profile[];
}

export interface ExternalIds {
  freebase_id: string;
  instagram_id: string;
  tvrage_id: number;
  twitter_id: string;
  freebase_mid: string;
  imdb_id: string;
  facebook_id?: string;
}

export interface Media {
  release_date: string;
  vote_count: number;
  video: boolean;
  adult: boolean;
  vote_average: number;
  title: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  id: number;
  backdrop_path: string;
  overview: string;
  poster_path: string;
}

export interface TaggedImage {
  iso_639_1?: string;
  vote_count: number;
  media_type: string;
  file_path: string;
  aspect_ratio: number;
  media: Media;
  height: number;
  vote_average: number;
  width: number;
}

export interface TaggedImages {
  results: TaggedImage[];
  page: number;
  total_results: number;
  id: number;
  total_pages: number;
}

export interface PersonDetail {
  birthday: string;
  known_for_department: string;
  id: number;
  place_of_birth: string;
  combined_credits: CombinedCredits;
  profile_path: string;
  imdb_id: string;
  deathday?: string;
  images: Images;
  external_ids: ExternalIds;
  name: string;
  also_known_as: string[];
  biography: string;
  tagged_images: TaggedImages;
  homepage?: string;
  gender: number;
  adult: boolean;
  popularity: number;
}
