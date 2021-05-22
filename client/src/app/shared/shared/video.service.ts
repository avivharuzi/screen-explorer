import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

import { ModalVideoComponent } from '../components/modal-video/modal-video.component';
import { Video } from './video';
import { VideoSite } from './video-site.enum';
import { VideoType } from './video-type.enum';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private bsModalRef: BsModalRef;

  constructor(private bsModalService: BsModalService) {}

  openModal(video: Video): void {
    const initialState = {
      video,
    };

    this.bsModalRef = this.bsModalService.show(ModalVideoComponent, {
      initialState,
      class: 'modal-video',
    });
  }

  getOnlyYouTubeVideos(videos: Video[]): Video[] {
    return videos.filter(video => video.site === VideoSite.YouTube);
  }

  getYouTubeVideoTrailerOrFirstOne(videos: Video[]): Video {
    if (videos.length === 0) {
      return null;
    }

    return (
      videos.find(
        video =>
          video.site === VideoSite.YouTube && video.type === VideoType.Trailer
      ) || videos[0]
    );
  }
}
