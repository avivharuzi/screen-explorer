import { Pipe, PipeTransform } from '@angular/core';

import { environment } from '../../../environments/environment';
import { YouTubeQuality } from '../shared/you-tube-quality.enum';

@Pipe({
  name: 'youTubeImage',
})
export class YouTubeImagePipe implements PipeTransform {
  transform(value: string): string {
    return `${environment.youtubeImageBaseUrl}/${value}/${YouTubeQuality.HD}.jpg`;
  }
}
