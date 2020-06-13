import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  year: number;
  authorLink: string;
  tmdbLink: string;

  constructor() {
    this.authorLink = 'https://www.avivharuzi.com';
    this.tmdbLink = 'https://www.themoviedb.org';
    this.year = new Date().getFullYear();
  }
}
