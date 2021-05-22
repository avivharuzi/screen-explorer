import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { MediaType } from '../../../../../shared/shared/media-type.enum';
import { SearchMulti } from '../../search-multi';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-search-multi-form',
  templateUrl: './search-multi-form.component.html',
  styleUrls: ['./search-multi-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMultiFormComponent implements OnInit, OnDestroy {
  @ViewChild('inputSearch', { static: false })
  inputSearchElementRef: ElementRef;

  isSearchContainerOpen: boolean;
  movies: SearchMulti[];
  people: SearchMulti[];
  tvShows: SearchMulti[];

  private query$: Subject<string>;

  constructor(
    private searchService: SearchService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.isSearchContainerOpen = false;
    this.query$ = new Subject<string>();
  }

  ngOnInit(): void {
    this.subscribeToSearchResults();
  }

  ngOnDestroy(): void {
    this.query$.unsubscribe();
  }

  startSearching(): void {
    if (!this.inputSearchValue) {
      this.resetResults();
      return;
    }

    this.query$.next(this.inputSearchValue);
  }

  toggleSearchContainerOpen(): void {
    this.isSearchContainerOpen = !this.isSearchContainerOpen;
    if (this.isSearchContainerOpen) {
      this.focusInputSearch();
    } else {
      this.resetResults();
    }

    this.changeDetectorRef.detectChanges();
  }

  onItemClick(event: (string | number)[]): void {
    this.resetResults();
    this.toggleSearchContainerOpen();
    this.router.navigate(event).then();
  }

  private get inputSearchValue(): string {
    return this.inputSearchElementRef.nativeElement.value;
  }

  private set inputSearchValue(inputSearchValue: string) {
    this.inputSearchElementRef.nativeElement.value = inputSearchValue;
  }

  private subscribeToSearchResults(): void {
    this.searchService
      .getMultiWithDelay(this.query$)
      .pipe(
        map(res => {
          const results = res.results;

          this.movies = results.filter(
            result => result.media_type === MediaType.Movie
          );
          this.tvShows = results.filter(
            result => result.media_type === MediaType.TV
          );
          this.people = results.filter(
            result => result.media_type === MediaType.Person
          );
          this.changeDetectorRef.detectChanges();

          return res;
        })
      )
      .subscribe();
  }

  private focusInputSearch(): void {
    this.inputSearchElementRef.nativeElement.focus();
  }

  private resetResults(): void {
    this.movies = [];
    this.tvShows = [];
    this.people = [];
    this.inputSearchValue = null;
    this.changeDetectorRef.detectChanges();
  }
}
