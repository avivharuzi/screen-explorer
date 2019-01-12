import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import { BASE_API_URL_MOVIES_DISCOVER, BASE_API_URL_MOVIES_NOW_PLAYING, BASE_API_URL_MOVIES_POPULAR, BASE_API_URL_MOVIES_TOP_RATED, BASE_API_URL_MOVIES_UPCOMING, BASE_API_URL_MOVIES } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(
    private httpService: HttpService
  ) { }

  getDiscover(params: object = {}) {
    return this.httpService.get(BASE_API_URL_MOVIES_DISCOVER, {
      params: {
        ...params
      }
    });
  }

  getNowPlaying(page: number) {
    return this.httpService.get(BASE_API_URL_MOVIES_NOW_PLAYING, {
      params: {
        page: page
      }
    });
  }

  getPopular(page: number) {
    return this.httpService.get(BASE_API_URL_MOVIES_POPULAR, {
      params: {
        page: page
      }
    });
  }

  getTopRated(page: number) {
    return this.httpService.get(BASE_API_URL_MOVIES_TOP_RATED, {
      params: {
        page: page
      }
    });
  }

  getUpcoming(page: number) {
    return this.httpService.get(BASE_API_URL_MOVIES_UPCOMING, {
      params: {
        page: page
      }
    });
  }

  getDetails(id: number) {
    return this.httpService.get(`${BASE_API_URL_MOVIES}/${id}`);
  }

  getSimilar(id: number, page: number) {
    return this.httpService.get(`${BASE_API_URL_MOVIES}/${id}/similar`, {
      params: {
        page: page
      }
    });
  }
}
