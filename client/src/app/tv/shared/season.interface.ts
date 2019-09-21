interface Crew {
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  gender: number;
  profile_path: string;
}

interface GuestStar {
  id: number;
  name: string;
  credit_id: string;
  character: string;
  order: number;
  gender: number;
  profile_path: string;
}

interface Episode {
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
  crew: Crew[];
  guest_stars: GuestStar[];
}

interface Cast {
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path: string;
}

interface Crew2 {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path: string;
}

interface Credits {
  cast: Cast[];
  crew: Crew2[];
}

interface ExternalIds {
  freebase_mid: string;
  freebase_id?: any;
  tvdb_id: number;
  tvrage_id?: any;
}

interface Images {
  posters: any[];
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

export interface Season {
  _id: string;
  air_date: string;
  episodes: Episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
  credits: Credits;
  external_ids: ExternalIds;
  images: Images;
  videos: Videos;
}
