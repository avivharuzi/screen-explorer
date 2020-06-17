import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { HttpResponsePagination } from '../../../shared/shared/http-response-pagination.interface';
import { MediaType } from './media-type.enum';
import { TimeWindow } from './time-window.enum';
import { Trend } from './trend';

@Injectable({
  providedIn: 'root',
})
export class TrendService {
  private readonly baseUrl = `${environment.baseApiUrl}/trends`;

  constructor(private httpClient: HttpClient) {}

  getList(mediaType: MediaType, timeWindow: TimeWindow): Observable<HttpResponsePagination<Trend>> {
    return this.httpClient.get<HttpResponsePagination<Trend>>(`${this.baseUrl}/${mediaType}/${timeWindow}`);
  }

  getListOnlyResults(mediaType: MediaType, timeWindow: TimeWindow): Observable<Trend[]> {
    return this.getList(mediaType, timeWindow).pipe(map(res => res.results));
  }
}
