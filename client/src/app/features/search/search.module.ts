import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchMultiFormComponent } from './shared/components/search-multi-form/search-multi-form.component';
import { SearchMultiListComponent } from './shared/components/search-multi-list/search-multi-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SearchMultiFormComponent, SearchMultiListComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [SearchMultiFormComponent],
})
export class SearchModule {}
