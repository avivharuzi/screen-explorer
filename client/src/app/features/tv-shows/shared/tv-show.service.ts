import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { HttpResponsePagination } from '../../../shared/shared/http-response-pagination.interface';
import { TvShow } from './tv-show';
import { TvShowDetail } from './tv-show-detail';
import { TvShowListType } from './tv-show-list-type.enum';

@Injectable({
  providedIn: 'root',
})
export class TvShowService {
  private readonly baseUrl = `${environment.baseApiUrl}/tv-shows`;

  constructor(private httpClient: HttpClient) {
  }

  getList(type: TvShowListType, params = {}): Observable<HttpResponsePagination<TvShow>> {
    return this.httpClient.get<HttpResponsePagination<TvShow>>(`${this.baseUrl}/${type}`, { params });
  }

  getDetail(id: number): Observable<TvShowDetail> {
    return this.httpClient.get<TvShowDetail>(`${this.baseUrl}/${id}`);
  }

  getSimilar(id: number): Observable<HttpResponsePagination<TvShow>> {
    return this.httpClient.get<HttpResponsePagination<TvShow>>(`${this.baseUrl}/${id}/similar`);
  }
}
