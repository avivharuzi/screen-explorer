export interface SeoInterface {
  title?: string;
  meta?: {
    keywords?: string;
    description?: string;
    type?: string;
    card?: string;
    image?: string;
    url?: string;
    author?: string;
  };
}

const home: SeoInterface = {
  title: 'Cinema'
};

const errorPage: SeoInterface = {
  title: '404 - Page Not Found'
};

const discoverMovies: SeoInterface = {
  title: 'Discover - Movies'
};

const discoverTvShows: SeoInterface = {
  title: 'Discover - TV Shows'
};

const moviesPopular: SeoInterface = {
  title: 'Movies - Popular'
};

const moviesTopRated: SeoInterface = {
  title: 'Movies - Top Rated'
};

const moviesUpcoming: SeoInterface = {
  title: 'Movies - Upcoming'
};

const moviesNowPlaying: SeoInterface = {
  title: 'Movies - Now Playing'
};

const tvShowsPopular: SeoInterface = {
  title: 'TV Shows - Popular'
};

const tvShowsTopRated: SeoInterface = {
  title: 'TV Shows - Top Rated'
};

const tvShowsOnTv: SeoInterface = {
  title: 'TV Shows - On TV'
};

const tvShowsAiringToday: SeoInterface = {
  title: 'TV Shows - Airing Today'
};

const peoplePopular: SeoInterface = {
  title: 'People - Popular'
};

export const seo = {
  home,
  errorPage,
  discoverMovies,
  discoverTvShows,
  moviesPopular,
  moviesTopRated,
  moviesUpcoming,
  moviesNowPlaying,
  tvShowsPopular,
  tvShowsTopRated,
  tvShowsOnTv,
  tvShowsAiringToday,
  peoplePopular
};
