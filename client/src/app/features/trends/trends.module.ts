import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxGlideModule } from 'ngx-glide';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { SharedModule } from '../../shared/shared.module';
import { TrendCarouselListComponent } from './shared/components/trend-carousel-list/trend-carousel-list.component';
import { TrendDayWeekListComponent } from './shared/components/trend-day-week-list/trend-day-week-list.component';
import { TrendListComponent } from './shared/components/trend-list/trend-list.component';

@NgModule({
  declarations: [
    TrendCarouselListComponent,
    TrendDayWeekListComponent,
    TrendListComponent,
  ],
  imports: [
    CommonModule,
    NgxGlideModule,
    RouterModule,
    SharedModule,
    TabsModule.forRoot(),
  ],
  exports: [TrendCarouselListComponent, TrendDayWeekListComponent],
})
export class TrendsModule {}
