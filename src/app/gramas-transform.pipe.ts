import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gramasTransform'
})
export class GramasTransformPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (value === undefined) {
      return '0';
    }
    if (value < 1000) {
      return value + ' (g)';
    } else {
      return (value / 1000).toFixed(2) +' (kg)';
    }
  }

}
