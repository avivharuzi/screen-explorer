import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

import { Movie } from '../../movie';
import { MovieListType } from '../../movie-list-type.enum';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie-dynamic-list',
  templateUrl: './movie-dynamic-list.component.html',
  styleUrls: ['./movie-dynamic-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDynamicListComponent {
  @Input() listType: MovieListType;

  movies: Movie[];
  totalItems: number;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private movieService: MovieService
  ) {
    this.totalItems = 0;
  }

  load(page: number): void {
    this.movieService.getList(this.listType, { page }).subscribe(res => {
      this.movies = res.results;
      this.totalItems = res.total_results;
      this.changeDetectorRef.detectChanges();
    });
  }
}
