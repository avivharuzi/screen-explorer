import { environment } from './../../environments/environment.staging';

const BASE_API_URL: string = 'http://localhost:3000/api/v1';

export const DEFAULT_IMAGE_PATH: string = 'assets/images/defaults/default-image.png';
export const LOADING_GIF_PATH: string = 'assets/images/tools/loading.gif';

// Movies
export const BASE_API_URL_MOVIES: string = `${BASE_API_URL}/movie`;
export const BASE_API_URL_MOVIES_DISCOVER: string = `${BASE_API_URL_MOVIES}/discover`;
export const BASE_API_URL_MOVIES_NOW_PLAYING: string = `${BASE_API_URL_MOVIES}/now-playing`;
export const BASE_API_URL_MOVIES_POPULAR: string = `${BASE_API_URL_MOVIES}/popular`;
export const BASE_API_URL_MOVIES_TOP_RATED: string = `${BASE_API_URL_MOVIES}/top-rated`;
export const BASE_API_URL_MOVIES_UPCOMING: string = `${BASE_API_URL_MOVIES}/upcoming`;

// TV Shows
export const BASE_API_URL_TV_SHOWS: string = `${BASE_API_URL}/tv`;
export const BASE_API_URL_TV_SHOWS_DISCOVER: string = `${BASE_API_URL_TV_SHOWS}/discover`;
export const BASE_API_URL_TV_SHOWS_AIRING_TODAY: string = `${BASE_API_URL_TV_SHOWS}/airing-today`;
export const BASE_API_URL_TV_SHOWS_ON_THE_AIR: string = `${BASE_API_URL_TV_SHOWS}/on-the-air`;
export const BASE_API_URL_TV_SHOWS_POPULAR: string = `${BASE_API_URL_TV_SHOWS}/popular`;
export const BASE_API_URL_TV_SHOWS_TOP_RATED: string = `${BASE_API_URL_TV_SHOWS}/top-rated`;

// People
export const BASE_API_URL_PEOPLE: string = `${BASE_API_URL}/people`;
export const BASE_API_URL_PEOPLE_POPULAR: string = `${BASE_API_URL}/popular`;
