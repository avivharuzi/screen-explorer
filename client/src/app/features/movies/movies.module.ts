import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieDynamicListComponent } from './shared/components/movie-dynamic-list/movie-dynamic-list.component';
import { MovieItemComponent } from './shared/components/movie-list/movie-item/movie-item.component';
import { MovieListComponent } from './shared/components/movie-list/movie-list.component';
import { MovieListNowPlayingComponent } from './components/movie-list-now-playing/movie-list-now-playing.component';
import { MovieListPopularComponent } from './components/movie-list-popular/movie-list-popular.component';
import { MovieListTopRatedComponent } from './components/movie-list-top-rated/movie-list-top-rated.component';
import { MovieListUpcomingComponent } from './components/movie-list-upcoming/movie-list-upcoming.component';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    MovieDetailComponent,
    MovieDynamicListComponent,
    MovieItemComponent,
    MovieListComponent,
    MovieListNowPlayingComponent,
    MovieListPopularComponent,
    MovieListTopRatedComponent,
    MovieListUpcomingComponent,
    MoviesComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, SharedModule, TabsModule.forRoot()],
})
export class MoviesModule {}
