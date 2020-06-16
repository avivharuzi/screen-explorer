import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NotFoundInterceptor } from './shared/not-found.interceptor';
import { SearchModule } from '../features/search/search.module';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SharedModule } from '../shared/shared.module';
import { TrendingsModule } from '../features/trendings/trendings.module';
import { NgxGlideModule } from 'ngx-glide';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SearchModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    SharedModule,
    TrendingsModule,
    NgxGlideModule,

  ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: NotFoundInterceptor,
    },
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
})
export class CoreModule {
}
