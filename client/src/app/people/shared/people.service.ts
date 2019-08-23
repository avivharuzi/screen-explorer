import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpResponsePagination } from 'src/app/shared/shared/http-response-pagination.interface';
import { People } from './people.interface';
import { PeopleDetail } from './people-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private readonly url = `${environment.baseApiUrl}/people`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getPopular(): Observable<HttpResponsePagination<People>> {
    return this.httpClient.get<HttpResponsePagination<People>>(`${this.url}/popular`);
  }

  getDetail(id: number): Observable<PeopleDetail> {
    return this.httpClient.get<PeopleDetail>(`${this.url}/${id}`);
  }
}
