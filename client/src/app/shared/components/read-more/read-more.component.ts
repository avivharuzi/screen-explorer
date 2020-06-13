import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadMoreComponent implements OnInit {
  @Input() maxLength: number;
  @Input() text: string;

  currentText: string;
  hideToggle: boolean;
  isCollapsed: boolean;

  constructor() {
    this.maxLength = 1000;
    this.hideToggle = true;
    this.isCollapsed = true;
  }

  ngOnInit(): void {
    this.determineView();
  }

  toggleView(): void {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }

  private determineView(): void {
    if (!this.text || this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
    }

    this.hideToggle = false;

    if (this.isCollapsed == true) {
      this.currentText = this.text.substring(0, this.maxLength) + '...';
    } else if (this.isCollapsed == false) {
      this.currentText = this.text;
    }
  }
}
