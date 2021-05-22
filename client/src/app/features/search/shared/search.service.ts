import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { HttpResponsePagination } from '../../../shared/shared/http-response-pagination.interface';
import { SearchMulti } from './search-multi';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly baseUrl = `${environment.baseApiUrl}/search`;

  constructor(private httpClient: HttpClient) {}

  getMulti(
    params:
      | HttpParams
      | {
          [param: string]: string | string[];
        } = {}
  ): Observable<HttpResponsePagination<SearchMulti>> {
    return this.httpClient.get<HttpResponsePagination<SearchMulti>>(
      `${this.baseUrl}/multi`,
      { params }
    );
  }

  getMultiWithDelay(
    query$: Observable<string>
  ): Observable<HttpResponsePagination<SearchMulti>> {
    return query$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(query => this.getMulti({ query }))
    );
  }
}
