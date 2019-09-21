import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Episode } from './episode.interface';
import { HttpResponsePagination } from 'src/app/shared/shared/http-response-pagination.interface';
import { Season } from './season.interface';
import { Tv } from './tv.interface';
import { TvDetail } from './tv-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  private readonly url = `${environment.baseApiUrl}/tv`;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getDiscover(): Observable<HttpResponsePagination<Tv>> {
    return this.httpClient.get<HttpResponsePagination<Tv>>(`${this.url}/discover`);
  }

  getAiringToday(page: number): Observable<HttpResponsePagination<Tv>> {
    return this.httpClient.get<HttpResponsePagination<Tv>>(`${this.url}/airing-today?page=${page}`);
  }

  getOnTheAir(page: number): Observable<HttpResponsePagination<Tv>> {
    return this.httpClient.get<HttpResponsePagination<Tv>>(`${this.url}/on-the-air?page=${page}`);
  }

  getPopular(page: number): Observable<HttpResponsePagination<Tv>> {
    return this.httpClient.get<HttpResponsePagination<Tv>>(`${this.url}/popular?page=${page}`);
  }

  getTopRated(page: number): Observable<HttpResponsePagination<Tv>> {
    return this.httpClient.get<HttpResponsePagination<Tv>>(`${this.url}/top-rated?page=${page}`);
  }

  getDetail(id: number): Observable<TvDetail> {
    return this.httpClient.get<TvDetail>(`${this.url}/${id}`);
  }

  getSimilar(id: number): Observable<HttpResponsePagination<Tv>> {
    return this.httpClient.get<HttpResponsePagination<Tv>>(`${this.url}/${id}/similar`);
  }

  getSeason(id: number, season: number): Observable<Season> {
    return this.httpClient.get<Season>(`${this.url}/${id}/season/${season}`);
  }

  getEpisode(id: number, season: number, episode: number): Observable<Episode> {
    return this.httpClient.get<Episode>(`${this.url}/${id}/season/${season}/episode/${episode}`);
  }
}
