interface Cast {
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
  episode_count ?: number;
  origin_country: string[];
  original_name: string;
  name: string;
  first_air_date: string;
}

interface Crew {
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
  episode_count ?: number;
  origin_country: any[];
  original_name: string;
  name: string;
  first_air_date: string;
}

interface CombinedCredits {
  cast: Cast[];
  crew: Crew[];
}

interface Profile {
  iso_639_1 ?: any;
  aspect_ratio: number;
  vote_count: number;
  height: number;
  vote_average: number;
  file_path: string;
  width: number;
}

interface Images {
  profiles: Profile[];
}

interface ExternalIds {
  freebase_id: string;
  instagram_id: string;
  tvrage_id: number;
  twitter_id ?: any;
  freebase_mid: string;
  imdb_id: string;
  facebook_id: string;
}

interface Media {
  poster_path: string;
  id: number;
  video: boolean;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

interface Result {
  iso_639_1 ?: any;
  vote_count: number;
  media_type: string;
  file_path: string;
  aspect_ratio: number;
  media: Media;
  height: number;
  vote_average: number;
  width: number;
}

interface TaggedImages {
  results: Result[];
  page: number;
  total_results: number;
  id: number;
  total_pages: number;
}

export interface PeopleDetail {
  birthday: string;
  known_for_department: string;
  id: number;
  place_of_birth: string;
  combined_credits: CombinedCredits;
  profile_path: string;
  imdb_id: string;
  deathday ?: any;
  images: Images;
  external_ids: ExternalIds;
  name: string;
  also_known_as: string[];
  biography: string;
  tagged_images: TaggedImages;
  homepage ?: any;
  gender: number;
  adult: boolean;
  popularity: number;
}
