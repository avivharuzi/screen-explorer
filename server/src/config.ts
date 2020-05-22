export default Object.freeze({
  server: {
    hostname: process.env.SERVER_HOSTNAME ?? '127.0.0.1',
    port: process.env.SERVER_PORT ?? 8080,
    env: process.env.NODE_ENV,
    isProduction: process.env.NODE_ENV === 'production',
  },
  tmdb: {
    api: {
      url: process.env.TMDB_API_URL,
      key: process.env.TMDB_API_KEY ?? null,
      defaultLanguage: process.env.TMDB_API_DEFAULT_LANGUAGE,
      defaultRegion: process.env.TMDB_API_DEFAULT_REGION,
    },
  },
});
