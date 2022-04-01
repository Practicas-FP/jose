import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entrada'
})
export class EntradaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
