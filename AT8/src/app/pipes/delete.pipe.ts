import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'delete'
})
export class deletepipe implements PipeTransform {

  transform(nimi: string): any {
    const n = nimi.indexOf("(");
    return nimi.substring(0,n);
  }

}
