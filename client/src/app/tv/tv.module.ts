import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';

import { SharedModule } from '../shared/shared.module';
import { TvRoutingModule } from './tv-routing.module';

import { TvComponent } from './tv.component';
import { TvListComponent } from './components/tv-list/tv-list.component';
import { TvItemComponent } from './components/tv-list/tv-item/tv-item.component';
import { TvPopularComponent } from './components/tv-popular/tv-popular.component';
import { TvTopRatedComponent } from './components/tv-top-rated/tv-top-rated.component';
import { TvOnTvComponent } from './components/tv-on-tv/tv-on-tv.component';
import { TvAiringTodayComponent } from './components/tv-airing-today/tv-airing-today.component';
import { TvDetailComponent } from './components/tv-detail/tv-detail.component';
import { TvSeasonComponent } from './components/tv-season/tv-season.component';
import { TvEpisodeComponent } from './components/tv-episode/tv-episode.component';
import { TvCardListComponent } from './shared/components/tv-card-list/tv-card-list.component';
import { TvDynamicListComponent } from './shared/components/tv-dynamic-list/tv-dynamic-list.component';

@NgModule({
  declarations: [
    TvComponent,
    TvListComponent,
    TvItemComponent,
    TvPopularComponent,
    TvTopRatedComponent,
    TvOnTvComponent,
    TvAiringTodayComponent,
    TvDetailComponent,
    TvSeasonComponent,
    TvEpisodeComponent,
    TvCardListComponent,
    TvDynamicListComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    SharedModule,
    TvRoutingModule,
  ],
})
export class TvModule {}
