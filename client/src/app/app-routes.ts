export const APP_ROUTES = {
  MOVIES: {
    self: 'movies',
    children: {
      POPULAR: 'popular',
      TOP_RATED: 'top-rated',
      UPCOMING: 'upcoming',
      NOW_PLAYING: 'now-playing',
    },
  },
  TV_SHOWS: {
    self: 'tv-shows',
    children: {
      POPULAR: 'popular',
      TOP_RATED: 'top-rated',
      ON_THE_AIR: 'on-the-air',
      AIRING_TODAY: 'airing-today',
    },
  },
  PEOPLE: {
    self: 'people',
    children: {
      POPULAR: 'popular',
    },
  },
};
