import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchMultiListComponent } from './shared/components/search-multi-list/search-multi-list.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchMultiFormComponent } from './shared/components/search-multi-form/search-multi-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchMultiListComponent, SearchMultiFormComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [SearchMultiFormComponent],
})
export class SearchModule {}
