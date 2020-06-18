import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isShow: boolean;

  constructor(
    private router: Router,
  ) {
    this.isShow = false;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isShow = false; // Close the the menu when router changed, for example when clicking on one of the nav links.
      }
    });
  }

  toggleShow(): void {
    this.isShow = !this.isShow;
  }
}
