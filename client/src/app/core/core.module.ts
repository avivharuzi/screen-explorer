import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundInterceptor } from './shared/not-found.interceptor';
import { SearchModule } from '../features/search/search.module';
import { SharedModule } from '../shared/shared.module';
import { TrendsModule } from '../features/trends/trends.module';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, HomeComponent, NotFoundComponent],
  imports: [BsDropdownModule.forRoot(), CommonModule, HttpClientModule, RouterModule, SearchModule, SharedModule, TrendsModule],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: NotFoundInterceptor,
    },
  ],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
