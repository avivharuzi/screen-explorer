import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isShow: boolean;

  constructor() {
    this.isShow = false;
  }

  toggleShow(): void {
    this.isShow = !this.isShow;
  }
}
