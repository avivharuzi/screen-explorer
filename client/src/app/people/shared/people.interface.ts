interface KnownFor {
  vote_average: number;
  vote_count: number;
  id: number;
  video: boolean;
  media_type: string;
  name: string;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_name: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

export interface People {
  popularity: number;
  id: number;
  profile_path: string;
  name: string;
  known_for: KnownFor[];
  adult: boolean;
}
