import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'numberFormatRound'})
export class NumberFormatRound implements PipeTransform {
  transform(value: number, roundingInterval: number): number {
    return Math.round(value / roundingInterval) * roundingInterval;
  }
}