import { BehaviorSubject, Observable } from 'rxjs';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2 } from '@angular/core';

import { Theme } from './theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY: string = 'theme';

  private theme: BehaviorSubject<Theme>;
  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  initTheme(): void {
    this.theme = new BehaviorSubject<Theme>(null);
    const themeFromLocalStorage = isPlatformBrowser(this.platformId) ? localStorage.getItem(this.THEME_KEY) : null;
    // @ts-ignore
    const theme: Theme = Object.values(Theme).includes(themeFromLocalStorage) ? themeFromLocalStorage : Theme.Light;
    this.setTheme(theme);
  }

  getTheme(): Observable<Theme> {
    return this.theme.asObservable();
  }

  setTheme(theme: Theme): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
    }

    this.renderer.removeClass(this.document.body, this.theme.value);
    this.renderer.addClass(this.document.body, theme);

    this.theme.next(theme);
  }
}
