import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

import { Person } from '../../shared/person';
import { PersonListType } from '../../shared/person-list-type.enum';
import { PersonService } from '../../shared/person.service';

@Component({
  selector: 'app-person-dynamic-list',
  templateUrl: './person-dynamic-list.component.html',
  styleUrls: ['./person-dynamic-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDynamicListComponent {
  @Input() listType: PersonListType;

  people: Person[];
  totalItems: number;

  constructor(private changeDetectorRef: ChangeDetectorRef, private personService: PersonService) {
    this.totalItems = 0;
  }

  load(page: number): void {
    this.personService.getList(this.listType, { page }).subscribe(res => {
      this.people = res.results;
      this.totalItems = res.total_results;
      this.changeDetectorRef.detectChanges();
    });
  }
}
