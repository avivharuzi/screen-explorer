import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ImagePipe } from './pipes/image.pipe';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { MainContainerComponent } from './components/main-container/main-container.component';

@NgModule({
  declarations: [ImagePipe, LazyLoadDirective, MainContainerComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
  ],
  exports: [ImagePipe, LazyLoadDirective, MainContainerComponent],
})
export class SharedModule { }
