import { Pipe, PipeTransform } from '@angular/core';
import { Reseller } from '../interfaces/reseller';

@Pipe({
  name: 'reseller',
})
export class ResellerPipe implements PipeTransform {
  transform(resellers: Reseller[], resellerCode: string): Reseller[] {
    if (!resellerCode) {
      return resellers;
    }
    return resellers.filter((cur) => cur.countryCode === resellerCode);
  }
}
