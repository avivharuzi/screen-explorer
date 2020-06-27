import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Theme } from '../../theme.enum';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeButtonComponent implements OnInit {
  theme$: Observable<Theme>;

  Theme = Theme;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.theme$ = this.themeService.getTheme();
  }

  changeTheme(theme: Theme): void {
    this.themeService.setTheme(theme);
  }
}
