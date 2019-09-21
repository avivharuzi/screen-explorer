import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

import { Tv } from '../../tv.interface';
import { TvCategory } from '../../tv-category.enum';
import { TvService } from '../../tv.service';
import { HttpResponsePagination } from '../../../../shared/shared/http-response-pagination.interface';

@Component({
  selector: 'app-tv-dynamic-list',
  templateUrl: './tv-dynamic-list.component.html',
  styleUrls: ['./tv-dynamic-list.component.scss'],
})
export class TvDynamicListComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() category: TvCategory;

  tv: Tv[];
  page: number;
  length: number;
  pageSize: number;
  disabled: boolean;

  private paramsSubscription: Subscription;

  constructor(
    private tvService: TvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: string,
  ) {
    this.page = 1;
    this.pageSize = 20;
  }

  ngOnInit() {
    this.initParams();
    this.populateTv();
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

    this.populateTv();
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

  private populateTv(): void {
    this.disabled = true;

    switch (this.category) {
      case TvCategory.AiringToday: {
        // noinspection JSDeprecatedSymbols
        this.tvService.getAiringToday(this.page).subscribe(this.success.bind(this), this.error);
        break;
      }
      case TvCategory.OnTheAir: {
        // noinspection JSDeprecatedSymbols
        this.tvService.getOnTheAir(this.page).subscribe(this.success.bind(this), this.error);
        break;
      }
      case TvCategory.Popular: {
        // noinspection JSDeprecatedSymbols
        this.tvService.getPopular(this.page).subscribe(this.success.bind(this), this.error);
        break;
      }
      case TvCategory.TopRated: {
        // noinspection JSDeprecatedSymbols
        this.tvService.getTopRated(this.page).subscribe(this.success.bind(this), this.error);
        break;
      }
    }
  }

  private success(res: HttpResponsePagination<Tv>): void {
    this.tv = res.results;
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
