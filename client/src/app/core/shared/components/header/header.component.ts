import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { APP_ROUTES } from '../../../../app-routes';

interface NavLink {
  route: (string | number)[];
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  isShow: boolean;

  MOVIE_NAV_LINKS: NavLink[] = [
    {
      route: ['/', APP_ROUTES.MOVIES.self, APP_ROUTES.MOVIES.children.POPULAR],
      name: 'Popular',
    },
    {
      route: [
        '/',
        APP_ROUTES.MOVIES.self,
        APP_ROUTES.MOVIES.children.TOP_RATED,
      ],
      name: 'Top Rated',
    },
    {
      route: ['/', APP_ROUTES.MOVIES.self, APP_ROUTES.MOVIES.children.UPCOMING],
      name: 'Upcoming',
    },
    {
      route: [
        '/',
        APP_ROUTES.MOVIES.self,
        APP_ROUTES.MOVIES.children.NOW_PLAYING,
      ],
      name: 'Now Playing',
    },
  ];

  TV_SHOW_NAV_LINKS: NavLink[] = [
    {
      route: [
        '/',
        APP_ROUTES.TV_SHOWS.self,
        APP_ROUTES.TV_SHOWS.children.POPULAR,
      ],
      name: 'Popular',
    },
    {
      route: [
        '/',
        APP_ROUTES.TV_SHOWS.self,
        APP_ROUTES.TV_SHOWS.children.TOP_RATED,
      ],
      name: 'Top Rated',
    },
    {
      route: [
        '/',
        APP_ROUTES.TV_SHOWS.self,
        APP_ROUTES.TV_SHOWS.children.ON_THE_AIR,
      ],
      name: 'On The Air',
    },
    {
      route: [
        '/',
        APP_ROUTES.TV_SHOWS.self,
        APP_ROUTES.TV_SHOWS.children.AIRING_TODAY,
      ],
      name: 'Airing Today',
    },
  ];

  PERSON_NAV_LINK: NavLink = {
    route: ['/', APP_ROUTES.PEOPLE.self, APP_ROUTES.PEOPLE.children.POPULAR],
    name: 'People',
  };

  constructor(private router: Router) {
    this.isShow = false;
  }

  ngOnInit(): void {
    this.handleRouterEvents();
  }

  toggleShow(): void {
    this.isShow = !this.isShow;
  }

  handleRouterEvents(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.isShow) {
        this.isShow = false; // Close the the menu when router changed, for example when clicking on one of the nav links.
      }
    });
  }
}
