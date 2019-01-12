// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Custom Modules
import { BackToTopModule } from './modules/back-to-top/back-to-top.module';

// 3rd Pary Modules
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Pages Components
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
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
import { PeopleComponent } from './pages/people/people.component';
import { PeoplePopularComponent } from './pages/people/people-popular/people-popular.component';

// Partial Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/base/header/header.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardsItemComponent } from './components/cards-list/cards-item/cards-item.component';
import { LoaderComponent } from './components/base/loader/loader.component';

// Pipes
import { TmdbImagePipe } from './pipes/tmdb-image.pipe';

// Directives
import { DefaultImageDirective } from './directives/default-image.directive';
import { PaginationStatsComponent } from './components/pagination-stats/pagination-stats.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    // Partial components
    AppComponent,
    HeaderComponent,
    CardsListComponent,
    CardsItemComponent,
    LoaderComponent,
    // Pages components
    HomeComponent,
    ErrorPageComponent,
    DiscoverMoviesComponent,
    DiscoverTvShowsComponent,
    MoviesComponent,
    MoviesNowPlayingComponent,
    MoviesPopularComponent,
    MoviesTopRatedComponent,
    MoviesUpcomingComponent,
    TvShowsComponent,
    TvShowsAiringTodayComponent,
    TvShowsOnTvComponent,
    TvShowsPopularComponent,
    TvShowsTopRatedComponent,
    TvShowsSeasonsComponent,
    TvShowsSeasonsEpisodesComponent,
    PeopleComponent,
    PeoplePopularComponent,
    // Pipes
    TmdbImagePipe,
    // Directives
    DefaultImageDirective,
    PaginationStatsComponent,
    FilterComponent
  ],
  imports: [
    // Modules
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    // Custom Modules
    BackToTopModule.forRoot(),
    // 3rd Party Modules
    NgbDropdownModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
