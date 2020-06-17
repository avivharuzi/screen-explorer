import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TrendListComponent } from './shared/components/trend-list/trend-list.component';

@NgModule({
  declarations: [TrendListComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TrendListComponent,
  ],
})
export class TrendsModule {
}
