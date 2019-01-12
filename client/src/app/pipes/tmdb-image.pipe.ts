import { Pipe, PipeTransform } from '@angular/core';

import { TMDB_BASE_IMAGE_URL_ORIGINAL, TMDB_BASE_IMAGE_URL_W500 } from '../constants/urls';

@Pipe({
  name: 'tmdbImage'
})
export class TmdbImagePipe implements PipeTransform {
  transform(value: any, size?: string): any {
    if (size && size === 'original') {
      return `${TMDB_BASE_IMAGE_URL_ORIGINAL}${value}`;
    }

    return `${TMDB_BASE_IMAGE_URL_W500}${value}`;
  }
}
