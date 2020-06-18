import { NgxSeo } from '@avivharuzi/ngx-seo';

interface TvShowsSeo {
  POPULAR: NgxSeo;
  TOP_RATED: NgxSeo;
  ON_THE_AIR: NgxSeo;
  AIRING_TODAY: NgxSeo;
}

export const TV_SHOWS_SEO: TvShowsSeo = {
  POPULAR: {
    title: 'Popular TV Shows',
  },
  TOP_RATED: {
    title: 'Top Rated TV Shows',
  },
  ON_THE_AIR: {
    title: 'On TV',
  },
  AIRING_TODAY: {
    title: 'Airing Today TV Shows',
  },
};
