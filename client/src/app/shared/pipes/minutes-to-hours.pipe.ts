import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHours',
})
export class MinutesToHoursPipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 60);
    const minutes: number = value % 60;
    return `${hours > 0 ? hours + 'h' : ''}${
      hours > 0 && minutes > 0 ? ' ' : ''
    }${minutes > 0 ? minutes + 'm' : ''}`;
  }
}
