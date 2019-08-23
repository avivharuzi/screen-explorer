import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpResponsePagination } from 'src/app/shared/shared/http-response-pagination.interface';
import { Movie } from './movie.interface';
import { MovieDetail } from './movie-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly url = `${environment.baseApiUrl}/movie`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getDiscover(): Observable<HttpResponsePagination<Movie>> {
    return this.httpClient.get<HttpResponsePagination<Movie>>(`${this.url}/discover`);
  }

  getNowPlaying(): Observable<HttpResponsePagination<Movie>> {
    return this.httpClient.get<HttpResponsePagination<Movie>>(`${this.url}/now-playing`);
  }

  getPopular(): Observable<HttpResponsePagination<Movie>> {
    return this.httpClient.get<HttpResponsePagination<Movie>>(`${this.url}/popular`);
  }

  getTopRated(): Observable<HttpResponsePagination<Movie>> {
    return this.httpClient.get<HttpResponsePagination<Movie>>(`${this.url}/top-rated`);
  }

  getUpcoming(): Observable<HttpResponsePagination<Movie>> {
    return this.httpClient.get<HttpResponsePagination<Movie>>(`${this.url}/upcoming`);
  }

  getDetail(id: number): Observable<MovieDetail> {
    return this.httpClient.get<MovieDetail>(`${this.url}/${id}`);
  }

  getSimilar(id: number): Observable<HttpResponsePagination<Movie>> {
    return this.httpClient.get<HttpResponsePagination<Movie>>(`${this.url}/${id}/similar`);
  }
}
