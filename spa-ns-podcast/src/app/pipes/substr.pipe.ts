import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(value: string, maxString = 117): any {

    let substr = value.length > maxString ? value.substr(0, maxString) + '...' : value ;

    return substr;
    
  }

}