import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NgxSeoService } from '@avivharuzi/ngx-seo';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private ngxSeoService: NgxSeoService,
    private personService: PersonService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = +params.id;

      this.personService
        .getDetail(id)
        .pipe(
          map(res => {
            this.ngxSeoService.setTitle(res.name); // Set person name...

            if (res.combined_credits.cast && res.combined_credits.cast.length > 0) {
              res.combined_credits.cast = res.combined_credits.cast.sort(this.personService.sortByDescDate);
            }

            if (res.combined_credits.crew && res.combined_credits.crew.length > 0) {
              res.combined_credits.crew = res.combined_credits.crew.sort(this.personService.sortByDescDate);
            }

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
