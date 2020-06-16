import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingListComponent } from './shared/components/trending-list/trending-list.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [TrendingListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TrendingListComponent
  ]
})
export class TrendingsModule { }
