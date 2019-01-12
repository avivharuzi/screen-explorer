// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { DiscoverMoviesComponent } from './pages/discover/discover-movies/discover-movies.component';
import { DiscoverTvShowsComponent } from './pages/discover/discover-tv-shows/discover-tv-shows.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MoviesNowPlayingComponent } from './pages/movies/movies-now-playing/movies-now-playing.component';
import { MoviesPopularComponent } from './pages/movies/movies-popular/movies-popular.component';
import { MoviesTopRatedComponent } from './pages/movies/movies-top-rated/movies-top-rated.component';
import { MoviesUpcomingComponent } from './pages/movies/movies-upcoming/movies-upcoming.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { TvShowsAiringTodayComponent } from './pages/tv-shows/tv-shows-airing-today/tv-shows-airing-today.component';
import { TvShowsOnTvComponent } from './pages/tv-shows/tv-shows-on-tv/tv-shows-on-tv.component';
import { TvShowsPopularComponent } from './pages/tv-shows/tv-shows-popular/tv-shows-popular.component';
import { TvShowsTopRatedComponent } from './pages/tv-shows/tv-shows-top-rated/tv-shows-top-rated.component';
import { TvShowsSeasonsComponent } from './pages/tv-shows/tv-shows-seasons/tv-shows-seasons.component';
import { TvShowsSeasonsEpisodesComponent } from './pages/tv-shows/tv-shows-seasons/tv-shows-seasons-episodes/tv-shows-seasons-episodes.component';
import { PeopleComponent } from './pages/people/people.component'
import { PeoplePopularComponent } from './pages/people/people-popular/people-popular.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

// Meta
import { seo } from './constants/seo';

// Routes
const routes: Routes = [
  { path: '', component: HomeComponent, data: seo.home },
  { path: 'discover/movies', component: DiscoverMoviesComponent, data: seo.discoverMovies },
  { path: 'discover/tv-shows', component: DiscoverTvShowsComponent, data: seo.discoverTvShows },
  { path: 'movies/now-playing', component: MoviesNowPlayingComponent, data: seo.moviesNowPlaying },
  { path: 'movies/popular', component: MoviesPopularComponent, data: seo.moviesPopular },
  { path: 'movies/top-rated', component: MoviesTopRatedComponent, data: seo.moviesTopRated },
  { path: 'movies/upcoming', component: MoviesUpcomingComponent, data: seo.moviesUpcoming },
  { path: 'movies/:id', component: MoviesComponent },
  { path: 'tv-shows/airing-today', component: TvShowsAiringTodayComponent, data: seo.tvShowsAiringToday },
  { path: 'tv-shows/on-tv', component: TvShowsOnTvComponent, data: seo.tvShowsOnTv },
  { path: 'tv-shows/popular', component: TvShowsPopularComponent, data: seo.tvShowsPopular },
  { path: 'tv-shows/top-rated', component: TvShowsTopRatedComponent, data: seo.tvShowsTopRated },
  { path: 'tv-shows/:id', component: TvShowsComponent },
  { path: 'tv-shows/:id/seasons/:seasonNumber', component: TvShowsSeasonsComponent },
  { path: 'tv-shows/:id/seasons/:seasonNumber/episodes/:episodeNumber', component: TvShowsSeasonsEpisodesComponent },
  { path: 'people/popular', component: PeoplePopularComponent, data: seo.peoplePopular },
  { path: 'people/:id', component: PeopleComponent },
  { path:  '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent, data: seo.errorPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
