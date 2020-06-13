import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListNowPlayingComponent } from './components/movie-list-now-playing/movie-list-now-playing.component';
import { MovieListPopularComponent } from './components/movie-list-popular/movie-list-popular.component';
import { MovieListTopRatedComponent } from './components/movie-list-top-rated/movie-list-top-rated.component';
import { MovieListUpcomingComponent } from './components/movie-list-upcoming/movie-list-upcoming.component';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: '', component: MoviesComponent, children: [
      { path: 'popular', component: MovieListPopularComponent },
      { path: 'top-rated', component: MovieListTopRatedComponent },
      { path: 'upcoming', component: MovieListUpcomingComponent },
      { path: 'now-playing', component: MovieListNowPlayingComponent },
      { path: ':id', component: MovieDetailComponent },
      { path: '', redirectTo: 'popular', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {
}
