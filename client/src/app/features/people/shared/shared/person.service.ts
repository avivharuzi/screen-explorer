import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { HttpResponsePagination } from '../../../../shared/shared/http-response-pagination.interface';
import { Person } from './person';
import { PersonDetail } from './person-detail';
import { PersonListType } from './person-list-type.enum';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private readonly baseUrl = `${environment.baseApiUrl}/people`;

  constructor(private httpClient: HttpClient) {}

  getList(type: PersonListType, params = {}): Observable<HttpResponsePagination<Person>> {
    return this.httpClient.get<HttpResponsePagination<Person>>(`${this.baseUrl}/${type}`, { params });
  }

  getDetail(id: number): Observable<PersonDetail> {
    return this.httpClient.get<PersonDetail>(`${this.baseUrl}/${id}`);
  }
}
