import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodeNumber',
})
export class EpisodeNumberPipe implements PipeTransform {
  transform(value: number): string {
    return `E${value < 10 ? '0' : ''}${value}`;
  }
}
