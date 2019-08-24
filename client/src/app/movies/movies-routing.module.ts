import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviePopularComponent } from './components/movie-popular/movie-popular.component';
import { MovieTopRatedComponent } from './components/movie-top-rated/movie-top-rated.component';
import { MovieUpcomingComponent } from './components/movie-upcoming/movie-upcoming.component';
import { MovieNowPlayingComponent } from './components/movie-now-playing/movie-now-playing.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'popular', component: MoviePopularComponent },
  { path: 'top-rated', component: MovieTopRatedComponent },
  { path: 'upcoming', component: MovieUpcomingComponent },
  { path: 'now-playing', component: MovieNowPlayingComponent },
  { path: ':id', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
