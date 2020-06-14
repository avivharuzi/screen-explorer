import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { SharedModule } from '../../shared/shared.module';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { TvShowDynamicListComponent } from './shared/components/tv-show-dynamic-list/tv-show-dynamic-list.component';
import { TvShowItemComponent } from './shared/components/tv-show-list/tv-show-item/tv-show-item.component';
import { TvShowListAiringTodayComponent } from './components/tv-show-list-airing-today/tv-show-list-airing-today.component';
import { TvShowListComponent } from './shared/components/tv-show-list/tv-show-list.component';
import { TvShowListOnTheAirComponent } from './components/tv-show-list-on-the-air/tv-show-list-on-the-air.component';
import { TvShowListPopularComponent } from './components/tv-show-list-popular/tv-show-list-popular.component';
import { TvShowListTopRatedComponent } from './components/tv-show-list-top-rated/tv-show-list-top-rated.component';
import { TvShowsComponent } from './tv-shows.component';
import { TvShowsRoutingModule } from './tv-shows-routing.module';

@NgModule({
  declarations: [
    TvShowDetailComponent,
    TvShowDynamicListComponent,
    TvShowItemComponent,
    TvShowListAiringTodayComponent,
    TvShowListComponent,
    TvShowListOnTheAirComponent,
    TvShowListPopularComponent,
    TvShowListTopRatedComponent,
    TvShowsComponent,
  ],
  imports: [CommonModule, SharedModule, TabsModule.forRoot(), TvShowsRoutingModule],
})
export class TvShowsModule {}
