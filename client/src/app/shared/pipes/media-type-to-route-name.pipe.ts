import { Pipe, PipeTransform } from '@angular/core';

import { APP_ROUTES } from '../../app-routes';
import { MediaType } from '../shared/media-type.enum';

@Pipe({
  name: 'mediaTypeToRouteName',
})
export class MediaTypeToRouteNamePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case MediaType.Movie:
        return APP_ROUTES.MOVIES.self;
      case MediaType.TV:
        return APP_ROUTES.TV_SHOWS.self;
      case MediaType.Person:
        return APP_ROUTES.PEOPLE.self;
      default:
        return '';
    }
  }
}
