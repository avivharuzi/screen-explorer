import { Profile } from '../../../../shared/shared/profile';

export interface Cast {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  vote_count: number;
  video: boolean;
  media_type: string;
  credit_id: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
  popularity: number;
  character: string;
  genre_ids: number[];
  adult: boolean;
  vote_average: number;
  release_date: string;
  episode_count?: number;
  origin_country: string[];
  original_name: string;
  name: string;
  first_air_date: string;
}

export interface Crew {
  id: number;
  department: string;
  original_language: string;
  original_title: string;
  job: string;
  overview: string;
  genre_ids: number[];
  video: boolean;
  media_type: string;
  credit_id: string;
  release_date: string;
  popularity: number;
  vote_average: number;
  backdrop_path: string;
  vote_count: number;
  adult: boolean;
  title: string;
  poster_path: string;
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
