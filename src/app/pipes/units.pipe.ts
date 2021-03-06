import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'units'
})
export class UnitsPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    switch (value) {
      case 'standard':
        return 'K'
      case 'metric':
        return 'C'
      case 'imperial':
        return 'F'
    }
  }

}
