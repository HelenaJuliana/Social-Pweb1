import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefonePipe'
})
export class TelefonePipe implements PipeTransform {
  transform(value: string, ): string {
    if (value && value.length === 10  ) {
      return `${value.substr(0, 0)}(${value.substr(0, 2)})${value.substr(3, 4)}-${value.substr(5, 4)}`;
    }else if (value && value.length === 8) {
      return `${value.substr(0, 4)}-${value.substr(3, 4)}`;
    }else if (value.length === 11){
      return `(00${value.substr(0, 0)}${value.substr(0, 0)})${value.substr(3, 4)}-${value.substr(5, 4)}`;

    }
    else{
      return value;
    }
  }


}
