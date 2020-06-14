import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundInterceptor } from './shared/not-found.interceptor';

@NgModule({
  declarations: [HomeComponent, NotFoundComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: NotFoundInterceptor,
    },
  ],
})
export class CoreModule {}
