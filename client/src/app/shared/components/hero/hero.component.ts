import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  @Input() backdrop: string;
  @Input() callToActionIcon: string;
  @Input() callToActionTitle: string;
  @Input() description: string;
  @Input() descriptionLabel: string;
  @Input() displayCallToAction: boolean;
  @Input() poster: string;
  @Input() posterHref: string;
  @Input() subtitle: string;
  @Input() title: string;

  @Output() callToActionClicked: EventEmitter<void>;

  constructor() {
    this.displayCallToAction = false;
    this.callToActionClicked = new EventEmitter<void>();
  }
}
