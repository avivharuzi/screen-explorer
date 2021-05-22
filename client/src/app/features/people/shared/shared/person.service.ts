import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cast, Crew, PersonDetail } from './person-detail';
import { environment } from '../../../../../environments/environment';
import { HttpResponsePagination } from '../../../../shared/shared/http-response-pagination.interface';
import { Person } from './person';
import { PersonListType } from './person-list-type.enum';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private readonly baseUrl = `${environment.baseApiUrl}/people`;

  constructor(private httpClient: HttpClient) {}

  getList(
    type: PersonListType,
    params = {}
  ): Observable<HttpResponsePagination<Person>> {
    return this.httpClient.get<HttpResponsePagination<Person>>(
      `${this.baseUrl}/${type}`,
      { params }
    );
  }

  getDetail(id: number): Observable<PersonDetail> {
    return this.httpClient.get<PersonDetail>(`${this.baseUrl}/${id}`);
  }

  sortByDescDate(a: Cast | Crew, b: Cast | Crew): number {
    const aDate = a.release_date || a.first_air_date;
    const bDate = b.release_date || b.first_air_date;

    if (!aDate) {
      return -1;
    }

    if (!bDate) {
      return 1;
    }

    return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
  }
}
