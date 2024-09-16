import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedWarrantys } from '../interfaces/activated-warrantys';

@Pipe({
  name: 'activatedSearch',
})
export class ActivatedSearchPipe implements PipeTransform {
  transform(
    ActivatedWarrantys: ActivatedWarrantys[],
    searchTerm: string
  ): ActivatedWarrantys[] {
    return ActivatedWarrantys.filter((cur) =>
      cur.serialNumber
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
  }
}
