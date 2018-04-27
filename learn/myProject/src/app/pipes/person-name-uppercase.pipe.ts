import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personNameUppercase'
})
export class PersonNameUppercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${value.toUpperCase()}, have a nice day!`;
  }

}
