import { Pipe, PipeTransform } from '@angular/core';

import { BackdropSize, LogoSize, PosterSize, ProfileSize, StillSize } from '../shared/tmdb-image-size';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'tmdbImage',
})
export class TmdbImagePipe implements PipeTransform {
  transform(path: string, size: BackdropSize | LogoSize | PosterSize | ProfileSize | StillSize): any {
    return `${environment.tmdbImageBaseUrl}/${size}${path}`;
  }
}
