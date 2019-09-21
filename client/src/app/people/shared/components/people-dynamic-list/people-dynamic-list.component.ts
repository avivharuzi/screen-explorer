import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { People } from '../../people.interface';
import { PeopleCategory } from '../../people-category.enum';
import { PeopleService } from '../../people.service';
import { HttpResponsePagination } from '../../../../shared/shared/http-response-pagination.interface';

@Component({
  selector: 'app-people-dynamic-list',
  templateUrl: './people-dynamic-list.component.html',
  styleUrls: ['./people-dynamic-list.component.scss'],
})
export class PeopleDynamicListComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() category: PeopleCategory;

  people: People[];
  page: number;
  length: number;
  pageSize: number;
  disabled: boolean;

  private paramsSubscription: Subscription;

  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
    this.page = 1;
    this.pageSize = 20;
  }

  ngOnInit() {
    this.initParams();
    this.populatePeople();
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  getPageIndex(): number {
    return this.page - 1;
  }

  onPage(event: PageEvent): void {
    if (event.pageIndex === this.getPageIndex()) {
      return;
    }

    this.page = event.pageIndex + 1;

    this.populatePeople();
  }

  private initParams(): void {
    this.paramsSubscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (!params.page || isNaN(params.page)) {
        return;
      }

      if (params.page < 1) {
        return;
      }

      this.page = +params.page;
    });
  }

  private populatePeople(): void {
    this.disabled = true;

    switch (this.category) {
      case PeopleCategory.Popular: {
        // noinspection JSDeprecatedSymbols
        this.peopleService.getPopular(this.page).subscribe(this.success.bind(this), this.error);
        break;
      }
    }
  }

  private success(res: HttpResponsePagination<People>): void {
    this.people = res.results;
    this.length = res.total_results;
    this.disabled = false;

    this.addPageToQuery();

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  private error(): void {
    this.router.navigateByUrl('**', { skipLocationChange: true }).then(_ => {
    });
  }

  private addPageToQuery(): void {
    this.router.navigate([], {
      queryParams: {
        page: this.page,
      },
      queryParamsHandling: 'merge',
    }).then(_ => {
    });
  }
}
