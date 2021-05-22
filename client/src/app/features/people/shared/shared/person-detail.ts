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
  job?: string;
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
  character?: string;
  credit_id: string;
  episode_count?: number;
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
  facebook_id?: string;
  freebase_id: string;
  freebase_mid: string;
  imdb_id: string;
  instagram_id: string;
  tvrage_id: number;
  twitter_id: string;
}

export interface Media {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
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

export interface TaggedImage {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1?: string;
  media: Media;
  media_type: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface TaggedImages {
  id: number;
  page: number;
  results: TaggedImage[];
  total_pages: number;
  total_results: number;
}

export interface PersonDetail {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  combined_credits: CombinedCredits;
  deathday?: string;
  external_ids: ExternalIds;
  gender: number;
  homepage?: string;
  id: number;
  images: Images;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  tagged_images: TaggedImages;
}
