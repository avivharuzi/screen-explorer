import { ActivatedRoute, Params, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-paginated-list',
  templateUrl: './paginated-list.component.html',
  styleUrls: ['./paginated-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatedListComponent implements OnInit {
  @Input() totalItems: number;
  @Input() itemsPerPage: number;

  @Output() pageClick: EventEmitter<number>;

  page: number;
  isReady: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.totalItems = 0;
    this.itemsPerPage = 20;
    this.pageClick = new EventEmitter<number>();
    this.page = 1;
    this.isReady = false;
  }

  ngOnInit(): void {
    this.initParams();
    this.pageClick.emit(this.page);
  }

  setPage(page: number): void {
    this.page = page;
  }

  onPageChanged({ page }: { page: number }): void {
    if (this.page === page) {
      return;
    }

    this.setPage(page);
    this.pageClick.emit(page);
    this.addPageToQuery();
  }

  private initParams(): void {
    const params = this.activatedRoute.snapshot.queryParams;
    this.initPage(params);
    this.isReady = true;
  }

  private initPage(params: Params): void {
    if (!params.page || isNaN(params.page)) {
      return;
    }

    if (params.page < 1) {
      return;
    }

    this.setPage(+params.page);
  }

  private addPageToQuery(): void {
    this.router.navigate([], {
      queryParams: {
        page: this.page,
      },
      queryParamsHandling: 'merge',
    }).then();
  }
}
