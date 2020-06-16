import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trending } from './trending';
import { HttpResponsePagination } from '../../../shared/shared/http-response-pagination.interface';
import { MediaType } from './media-type.enum';
import { TimeWindow } from './time-window.enum';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  private readonly baseUrl = `${environment.baseApiUrl}/trending`;

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getList(mediaType: MediaType, timeWindow: TimeWindow): Observable<HttpResponsePagination<Trending>> {
    return this.httpClient.get<HttpResponsePagination<Trending>>(`${this.baseUrl}/${mediaType}/${timeWindow}`);
  }

  getListOnlyResults(mediaType: MediaType, timeWindow: TimeWindow): Observable<Trending[]> {
    return this.getList(mediaType, timeWindow).pipe(
      map(res => res.results),
    );
  }
}
