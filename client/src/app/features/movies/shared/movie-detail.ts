import { Backdrop } from '../../../shared/shared/backdrop';
import { BelongsToCollection } from '../../../shared/shared/belongs-to-collection';
import { Cast } from '../../../shared/shared/cast';
import { Crew } from '../../../shared/shared/crew';
import { Genre } from '../../../shared/shared/genre';
import { Keyword } from '../../../shared/shared/keyword';
import { Poster } from '../../../shared/shared/poster';
import { ProductionCompany } from '../../../shared/shared/production-company';
import { ProductionCountry } from '../../../shared/shared/production-country';
import { SpokenLanguage } from '../../../shared/shared/spoken-language';
import { Video } from '../../../shared/shared/video';

export interface Videos {
  results: Video[];
}

export interface Images {
  backdrops: Backdrop[];
  posters: Poster[];
}

export interface ExternalIds {
  facebook_id: string;
  imdb_id: string;
  instagram_id: string;
  twitter_id: string;
}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export interface Keywords {
  keywords: Keyword[];
}

export interface ReleaseDate {
  certification: string;
  iso_639_1: string;
  note: string;
  release_date: Date;
  type: number;
}

export interface ReleaseDate {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDates {
  results: ReleaseDate[];
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  credits: Credits;
  external_ids: ExternalIds;
  genres: Genre[];
  homepage: string;
  id: number;
  images: Images;
  imdb_id: string;
  keywords: Keywords;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  release_dates: ReleaseDates;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  videos: Videos;
  vote_average: number;
  vote_count: number;
}
