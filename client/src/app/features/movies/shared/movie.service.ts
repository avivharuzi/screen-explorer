import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { HttpResponsePagination } from '../../../shared/shared/http-response-pagination.interface';
import { Movie } from './movie';
import { MovieDetail } from './movie-detail';
import { MovieListType } from './movie-list-type.enum';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly baseUrl = `${environment.baseApiUrl}/movies`;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getList(type: MovieListType, params = {}): Observable<HttpResponsePagination<Movie>> {
    return this.httpClient.get<HttpResponsePagination<Movie>>(`${this.baseUrl}/${type}`, { params });
  }

  getDetail(id: number): Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(`${this.baseUrl}/${id}`);
  }

  getSimilar(id: number): Observable<HttpResponsePagination<Movie>> {
    return this.httpClient.get<HttpResponsePagination<Movie>>(`${this.baseUrl}/${id}/similar`);
  }
}
