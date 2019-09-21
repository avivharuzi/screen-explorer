import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesComponent } from './movies.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieItemComponent } from './components/movie-list/movie-item/movie-item.component';
import { MoviePopularComponent } from './components/movie-popular/movie-popular.component';
import { MovieTopRatedComponent } from './components/movie-top-rated/movie-top-rated.component';
import { MovieUpcomingComponent } from './components/movie-upcoming/movie-upcoming.component';
import { MovieNowPlayingComponent } from './components/movie-now-playing/movie-now-playing.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieCardListComponent } from './shared/components/movie-card-list/movie-card-list.component';
import { SharedModule } from '../shared/shared.module';

import { MovieDynamicListComponent } from './shared/components/movie-dynamic-list/movie-dynamic-list.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieListComponent,
    MovieItemComponent,
    MoviePopularComponent,
    MovieTopRatedComponent,
    MovieUpcomingComponent,
    MovieNowPlayingComponent,
    MovieDetailComponent,
    MovieCardListComponent,
    MovieDynamicListComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    SharedModule,
    MoviesRoutingModule,
  ],
})
export class MoviesModule {}
