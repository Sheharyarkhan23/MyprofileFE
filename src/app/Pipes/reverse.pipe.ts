import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";



@Pipe({ name: 'reverse' })

export class ReversePipe implements PipeTransform {
  transform(value: any, args?: any) {
    if (!value) return value;
    return value.split('').reverse().join('');
  }
}
