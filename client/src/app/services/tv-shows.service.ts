import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import { BASE_API_URL_TV_SHOWS_DISCOVER, BASE_API_URL_TV_SHOWS_POPULAR, BASE_API_URL_TV_SHOWS_TOP_RATED, BASE_API_URL_TV_SHOWS_AIRING_TODAY, BASE_API_URL_TV_SHOWS_ON_THE_AIR, BASE_API_URL_TV_SHOWS } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  constructor(
    private httpService: HttpService
  ) { }

  getDiscover(params: object = {}) {
    return this.httpService.get(BASE_API_URL_TV_SHOWS_DISCOVER, {
      params: {
        ...params
      }
    });
  }

  getAiringToday(page: number) {
    return this.httpService.get(BASE_API_URL_TV_SHOWS_AIRING_TODAY, {
      params: {
        page: page
      }
    });
  }

  getOnTheAir(page: number) {
    return this.httpService.get(BASE_API_URL_TV_SHOWS_ON_THE_AIR, {
      params: {
        page: page
      }
    });
  }

  getPopular(page: number) {
    return this.httpService.get(BASE_API_URL_TV_SHOWS_POPULAR, {
      params: {
        page: page
      }
    });
  }

  getTopRated(page: number) {
    return this.httpService.get(BASE_API_URL_TV_SHOWS_TOP_RATED, {
      params: {
        page: page
      }
    });
  }

  getDetails(id: number) {
    return this.httpService.get(`${BASE_API_URL_TV_SHOWS}/${id}`);
  }

  getSimilar(id: number, page: number) {
    return this.httpService.get(`${BASE_API_URL_TV_SHOWS}/${id}/similar`, {
      params: {
        page: page
      }
    });
  }

  getSeason(id: number, season: number) {
    return this.httpService.get(`${BASE_API_URL_TV_SHOWS}/${id}/season/${season}`);
  }

  getEpisode(id: number, season: number, episode: number) {
    return this.httpService.get(`${BASE_API_URL_TV_SHOWS}/${id}/season/${season}/episode/${episode}`);
  }
}
