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
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  gender: number;
  profile_path: string;
}

interface GuestStar2 {
  id: number;
  name: string;
  credit_id: string;
  character: string;
  order: number;
  gender: number;
  profile_path: string;
}

interface Credits {
  cast: Cast[];
  crew: Crew2[];
  guest_stars: GuestStar2[];
}

interface ExternalIds {
  imdb_id: string;
  freebase_mid: string;
  freebase_id?: any;
  tvdb_id: number;
  tvrage_id: number;
}

interface Still {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1?: any;
  vote_average: number;
  vote_count: number;
  width: number;
}

interface Images {
  stills: Still[];
}

interface Videos {
  results: any[];
}

export interface Episode {
  air_date: string;
  crew: Crew[];
  episode_number: number;
  guest_stars: GuestStar[];
  name: string;
  overview: string;
  id: number;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  credits: Credits;
  external_ids: ExternalIds;
  images: Images;
  videos: Videos;
}
