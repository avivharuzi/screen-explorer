import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from '../../app-routes';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieListNowPlayingComponent } from './components/movie-list-now-playing/movie-list-now-playing.component';
import { MovieListPopularComponent } from './components/movie-list-popular/movie-list-popular.component';
import { MovieListTopRatedComponent } from './components/movie-list-top-rated/movie-list-top-rated.component';
import { MovieListUpcomingComponent } from './components/movie-list-upcoming/movie-list-upcoming.component';
import { MOVIES_SEO } from './movies-seo';
import { MoviesComponent } from './movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    children: [
      { path: APP_ROUTES.MOVIES.children.POPULAR, component: MovieListPopularComponent, data: { seo: MOVIES_SEO.POPULAR } },
      { path: APP_ROUTES.MOVIES.children.TOP_RATED, component: MovieListTopRatedComponent, data: { seo: MOVIES_SEO.TOP_RATED } },
      { path: APP_ROUTES.MOVIES.children.UPCOMING, component: MovieListUpcomingComponent, data: { seo: MOVIES_SEO.UPCOMING } },
      { path: APP_ROUTES.MOVIES.children.NOW_PLAYING, component: MovieListNowPlayingComponent, data: { seo: MOVIES_SEO.NOW_PLAYING } },
      { path: ':id', component: MovieDetailComponent },
      { path: '', redirectTo: 'popular', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
