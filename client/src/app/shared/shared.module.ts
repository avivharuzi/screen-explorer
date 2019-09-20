import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagePipe } from './pipes/image.pipe';
import { LazyLoadDirective } from './directives/lazy-load.directive';

@NgModule({
  declarations: [ImagePipe, LazyLoadDirective],
  imports: [CommonModule],
  exports: [ImagePipe, LazyLoadDirective],
})
export class SharedModule { }
