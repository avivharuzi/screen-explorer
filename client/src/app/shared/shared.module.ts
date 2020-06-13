import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { CardComponent } from './components/card/card.component';
import { CastListComponent } from './components/cast-list/cast-list.component';
import { ContainerComponent } from './components/container/container.component';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { DefaultImageDirective } from './directives/default-image.directive';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';
import { PaginatedListComponent } from './components/paginated-list/paginated-list.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { TmdbImagePipe } from './pipes/tmdb-image.pipe';
import { VideoComponent } from './components/video/video.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { YouTubeIframeUrlPipe } from './pipes/you-tube-iframe-url.pipe';
import { YouTubeImagePipe } from './pipes/you-tube-image.pipe';

@NgModule({
  declarations: [
    CardComponent,
    CastListComponent,
    ContainerComponent,
    CrewListComponent,
    DefaultImageDirective,
    HeaderComponent,
    HeroComponent,
    ImageListComponent,
    ModalVideoComponent,
    PaginatedListComponent,
    SectionTitleComponent,
    TmdbImagePipe,
    VideoComponent,
    VideoListComponent,
    YouTubeIframeUrlPipe,
    YouTubeImagePipe,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    RouterModule,
    TabsModule.forRoot(),
  ],
  exports: [
    CardComponent,
    CastListComponent,
    ContainerComponent,
    CrewListComponent,
    DefaultImageDirective,
    HeaderComponent,
    HeroComponent,
    ImageListComponent,
    ModalVideoComponent,
    PaginatedListComponent,
    SectionTitleComponent,
    TmdbImagePipe,
    VideoComponent,
    VideoListComponent,
    YouTubeIframeUrlPipe,
    YouTubeImagePipe,
  ],
})
export class SharedModule {
}
