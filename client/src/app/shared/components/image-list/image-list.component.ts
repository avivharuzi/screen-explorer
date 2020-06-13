import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Backdrop } from '../../shared/backdrop';
import { Poster } from '../../shared/poster';
import { Profile } from '../../shared/profile';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageListComponent {
  @Input() images: Backdrop[] | Poster[] | Profile[];
}
