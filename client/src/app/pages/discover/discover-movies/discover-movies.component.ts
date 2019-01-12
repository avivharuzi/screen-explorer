import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../../services/movies.service';

import { Filter } from '../../../models/filter.model';

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
  styleUrls: ['./discover-movies.component.scss']
})
export class DiscoverMoviesComponent implements OnInit {
  public movies: any[];
  public isLoading: boolean;
  public page: number;
  public totalPages: number;
  public results: number;
  public totalResults: number;
  public filter: Filter;

  constructor(
    private moviesService: MoviesService
  ) {
    this.isLoading = true;
    this.movies = [];
    this.page = 1;
    this.filter = new Filter();
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.moviesService.getDiscover({
      page: this.page,
      sort_by: this.filter.sortBy,
      with_keywords: this.filter.keywords,
      with_genres: this.filter.genres,
      primary_release_year: this.filter.year,
    }).subscribe((movies: any) => {
      this.movies.push(...movies.results);
      this.totalPages = movies.total_pages;
      this.results = this.movies.length;
      this.totalResults = movies.total_results;
      this.isLoading = false;
      this.page++;
    });
  }

  onScroll() {
    this.isLoading = true;
    let $this = this;

    setTimeout(function () {
      $this.getMovies();
    }, 200);
  }

  onFilterClick(event: Filter) {
    this.filter = event;
    this.resetMovies();
    this.getMovies();
  }

  resetMovies() {
    this.isLoading = true;
    this.movies = [];
    this.page = 1;
    this.totalPages = 0;
    this.results = 0;
    this.totalResults = 0;
  }
}
