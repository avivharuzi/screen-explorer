import { BsModalRef } from 'ngx-bootstrap/modal';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Video } from '../../shared/video';

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalVideoComponent {
  video: Video;

  constructor(
    public bsModalRef: BsModalRef,
  ) {
  }
}
