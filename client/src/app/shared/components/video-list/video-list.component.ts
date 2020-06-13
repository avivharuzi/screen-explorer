import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Video } from '../../shared/video';
import { VideoService } from '../../shared/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoListComponent {
  @Input() videos: Video[];

  constructor(
    private videoService: VideoService,
  ) {
  }

  openVideoModal(video: Video): void {
    this.videoService.openModal(video);
  }
}
