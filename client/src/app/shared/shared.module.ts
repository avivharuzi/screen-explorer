import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { CastListComponent } from './components/cast-list/cast-list.component';
import { ContainerComponent } from './components/container/container.component';
import { CrewListComponent } from './components/crew-list/crew-list.component';
import { DefaultImageDirective } from './directives/default-image.directive';
import { HeroComponent } from './components/hero/hero.component';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { MediaTypeToRouteNamePipe } from './pipes/media-type-to-route-name.pipe';
import { ModalVideoComponent } from './components/modal-video/modal-video.component';
import { PaginatedListComponent } from './components/paginated-list/paginated-list.component';
import { ParenthesisPipe } from './pipes/parenthesis.pipe';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { TimelineContainerComponent } from './components/timeline-container/timeline-container.component';
import { TimelineItemComponent } from './components/timeline-item/timeline-item.component';
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
    HeroComponent,
    HorizontalCardComponent,
    ImageListComponent,
    MediaTypeToRouteNamePipe,
    ModalVideoComponent,
    PaginatedListComponent,
    ParenthesisPipe,
    ReadMoreComponent,
    SectionTitleComponent,
    TimelineContainerComponent,
    TimelineItemComponent,
    TmdbImagePipe,
    VideoComponent,
    VideoListComponent,
    YouTubeIframeUrlPipe,
    YouTubeImagePipe,
  ],
  imports: [CommonModule, FormsModule, ModalModule.forRoot(), PaginationModule.forRoot(), RouterModule],
  exports: [
    CardComponent,
    CastListComponent,
    ContainerComponent,
    CrewListComponent,
    DefaultImageDirective,
    HeroComponent,
    HorizontalCardComponent,
    ImageListComponent,
    MediaTypeToRouteNamePipe,
    ModalVideoComponent,
    PaginatedListComponent,
    ParenthesisPipe,
    ReadMoreComponent,
    SectionTitleComponent,
    TimelineContainerComponent,
    TimelineItemComponent,
    TmdbImagePipe,
    VideoComponent,
    VideoListComponent,
    YouTubeIframeUrlPipe,
    YouTubeImagePipe,
  ],
})
export class SharedModule {}
