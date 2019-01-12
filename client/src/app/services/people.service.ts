import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

import { BASE_API_URL_PEOPLE_POPULAR, BASE_API_URL_PEOPLE } from '../constants/urls';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(
    private httpService: HttpService
  ) { }

  getPopular(page: number) {
    return this.httpService.get(BASE_API_URL_PEOPLE_POPULAR, {
      params: {
        page: page
      }
    });
  }

  getDetails(id: number) {
    return this.httpService.get(`${BASE_API_URL_PEOPLE}/${id}`);
  }
}
