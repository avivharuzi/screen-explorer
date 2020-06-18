import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TrendListComponent } from './shared/components/trend-list/trend-list.component';
import { TrendDayWeekListComponent } from './shared/components/trend-day-week-list/trend-day-week-list.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { TrendCarouselListComponent } from './shared/components/trend-carousel-list/trend-carousel-list.component';
import { NgxGlideModule } from 'ngx-glide';

@NgModule({
  declarations: [TrendListComponent, TrendDayWeekListComponent, TrendCarouselListComponent],
  imports: [CommonModule, SharedModule, TabsModule.forRoot(), RouterModule, NgxGlideModule],
  exports: [TrendDayWeekListComponent, TrendCarouselListComponent],
})
export class TrendsModule {}
