import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TrendListComponent } from './shared/components/trend-list/trend-list.component';
import { TrendDayWeekListComponent } from './shared/components/trend-day-week-list/trend-day-week-list.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TrendListComponent, TrendDayWeekListComponent],
  imports: [CommonModule, SharedModule, TabsModule.forRoot(), RouterModule],
  exports: [TrendDayWeekListComponent],
})
export class TrendsModule {}
