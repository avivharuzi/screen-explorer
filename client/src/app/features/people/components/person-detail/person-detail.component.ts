import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { PersonDetail } from '../../shared/shared/person-detail';
import { PersonService } from '../../shared/shared/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonDetailComponent implements OnInit {
  personDetail: PersonDetail;

  constructor(private activatedRoute: ActivatedRoute, private personService: PersonService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params.id;

      this.personService
        .getDetail(id)
        .pipe(
          map(res => {
            res.biography = res.biography.split('\n').join('<p></p>') || `We don\'t have a biography for ${res.name}.`;
            return res;
          })
        )
        .subscribe(res => {
          this.personDetail = res;
          this.changeDetectorRef.detectChanges();
        });
    });
  }
}
