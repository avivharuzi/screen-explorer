import { Request, Response } from 'express';

import { TMDB } from './TMDB';

export class TMDBHandler {
  // eslint-disable-next-line
  static async handleReq(req: Request, res: Response, uri: string, extraQuery: { [key: string]: any } = {}): Promise<void> {
    try {
      const data = await TMDB.getData(uri, req.query, extraQuery);

      res.locals.success(data);
    } catch (err) {
      res.locals.error(err);
    }
  }
}
