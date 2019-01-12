// Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Custom Modules
import { MessageModule } from './modules/message/message.module';
import { PaginationModule } from './modules/pagination/pagination.module';
import { BackToTopModule } from './modules/back-to-top/back-to-top.module';
import { LoadingModule } from './modules/loading/loading.module';
import { InputModule } from './modules/input/input.module';
import { FileInputModule } from './modules/file-input/file-input.module';
import { PictureModule } from './modules/picture/picture.module';
import { CountDownTimerModule } from './modules/countdown-timer/countdown-timer.module';
import { ErrorFormModule } from './modules/error-form/error-form.module';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
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
import { PeopleComponent } from './pages/people/people.component';
import { PeoplePopularComponent } from './pages/people/people-popular/people-popular.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

// Pipes
import { SearchPipe } from './pipes/search.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UcwordsPipe } from './pipes/ucwords.pipe';
import { DefaultPipe } from './pipes/default.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { RepeatPipe } from './pipes/repeat.pipe';
import { TrimPipe } from './pipes/trim.pipe';
import { MatchPipe } from './pipes/match.pipe';
import { SlugifyPipe } from './pipes/slugify.pipe';
import { AutoLinkPipe } from './pipes/auto-link.pipe';

// Directives
import { DefaultImageDirective } from './directives/default-image.directive';
import { ClipboardDirective } from './directives/clipboard.directive';
import { HeaderComponent } from './components/base/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    DefaultImageDirective,
    ClipboardDirective,
    CapitalizePipe,
    SearchPipe,
    UcwordsPipe,
    DefaultPipe,
    TruncatePipe,
    SafeUrlPipe,
    SafeHtmlPipe,
    RepeatPipe,
    TrimPipe,
    MatchPipe,
    SlugifyPipe,
    AutoLinkPipe,
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
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MessageModule.forRoot(),
    PaginationModule.forRoot(),
    BackToTopModule.forRoot(),
    LoadingModule.forRoot(),
    InputModule.forRoot(),
    FileInputModule.forRoot(),
    ErrorFormModule.forRoot(),
    PictureModule.forRoot(),
    CountDownTimerModule.forRoot(),
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
