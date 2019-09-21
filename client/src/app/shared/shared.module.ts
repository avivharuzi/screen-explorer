import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

import { MainContainerComponent } from './components/main-container/main-container.component';
import { CardComponent } from './components/card/card.component';
import { HeroComponent } from './components/hero/hero.component';

import { ImagePipe } from './pipes/image.pipe';

import { LazyLoadDirective } from './directives/lazy-load.directive';
import { NoImageDirective } from './directives/no-image.directive';

@NgModule({
  declarations: [
    MainContainerComponent,
    CardComponent,
    HeroComponent,
    ImagePipe,
    LazyLoadDirective,
    NoImageDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatRippleModule,
    MatCardModule,
  ],
  exports: [
    MainContainerComponent,
    CardComponent,
    HeroComponent,
    ImagePipe,
    LazyLoadDirective,
    NoImageDirective,
  ],
})
export class SharedModule {}
