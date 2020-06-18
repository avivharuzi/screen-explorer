import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { HttpResponsePagination } from '../../../shared/shared/http-response-pagination.interface';
import { MediaTypeList } from './media-type-list.enum';
import { TimeWindow } from './time-window.enum';
import { Trend } from './trend';

@Injectable({
  providedIn: 'root',
})
export class TrendService {
  private readonly baseUrl = `${environment.baseApiUrl}/trends`;

  constructor(private httpClient: HttpClient) {}

  getList(mediaTypeList: MediaTypeList, timeWindow: TimeWindow): Observable<HttpResponsePagination<Trend>> {
    return this.httpClient.get<HttpResponsePagination<Trend>>(`${this.baseUrl}/${mediaTypeList}/${timeWindow}`);
  }

  getListOnlyResults(mediaTypeList: MediaTypeList, timeWindow: TimeWindow): Observable<Trend[]> {
    return this.getList(mediaTypeList, timeWindow).pipe(map(res => res.results));
  }
}
