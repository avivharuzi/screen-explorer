import { Pipe, PipeTransform } from '@angular/core';

import { environment } from 'src/environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  transform(path: string, size: string = 'w500'): any {
    return `${environment.baseImagesUrl}/${size}${path}`;
  }
}
