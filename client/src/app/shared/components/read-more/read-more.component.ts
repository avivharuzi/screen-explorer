import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadMoreComponent implements OnInit, OnChanges {
  @Input() maxLength: number;
  @Input() text: string;

  currentText: string;
  hideToggle: boolean;
  isCollapsed: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.maxLength = 1000;
    this.hideToggle = true;
    this.isCollapsed = true;
  }

  ngOnInit(): void {
    this.determineView();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.text &&
      changes.text.previousValue !== changes.text.currentValue
    ) {
      this.determineView();
      this.changeDetectorRef.detectChanges();
    }
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

    if (this.isCollapsed) {
      this.currentText = this.text.substring(0, this.maxLength) + '...';
    } else {
      this.currentText = this.text;
    }
  }
}
