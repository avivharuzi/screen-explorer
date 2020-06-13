import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Video } from '../../shared/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoComponent {
  @Input() video: Video;
}
