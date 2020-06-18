import { NgxSeo } from '@avivharuzi/ngx-seo';

interface MoviesSeo {
  POPULAR: NgxSeo;
  TOP_RATED: NgxSeo;
  UPCOMING: NgxSeo;
  NOW_PLAYING: NgxSeo;
}

export const MOVIES_SEO: MoviesSeo = {
  POPULAR: {
    title: 'Popular Movies',
  },
  TOP_RATED: {
    title: 'Top Rated Movies',
  },
  UPCOMING: {
    title: 'Upcoming Movies',
  },
  NOW_PLAYING: {
    title: 'Now Playing Movies',
  },
};
