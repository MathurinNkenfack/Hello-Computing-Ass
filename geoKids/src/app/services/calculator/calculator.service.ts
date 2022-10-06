import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Units } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private unitChosenSource = new ReplaySubject<Units>(1);
  private areaSource = new ReplaySubject<string>(1);
  private perimeterSource = new ReplaySubject<string>(1);
  public unitChosen$ = this.unitChosenSource.asObservable();
  public area$ = this.areaSource.asObservable();
  public perimeter$ = this.perimeterSource.asObservable();

  constructor() { }

  submitUnit(unit: Units){
    this.unitChosenSource.next(unit);
  }

  submitArea(area: string){
    this.areaSource.next(area);
  }

  submitPerimeter(perimeter: string){
    this.perimeterSource.next(perimeter);
  }
  //round decimal number to 4 digits after decimal point if neccessary
  public roundUp(n: string):string{
    if(n.indexOf(".") !== -1){
      console.log(n);
      var count = n.length -1 - n.indexOf(".");
      console.log(count);
      if(count <= 4){
        return n;
      }else{
        return parseFloat(parseFloat(n).toPrecision(6)).toString();
      }
    }else{
      return n;
    }
  }

  //function to return results out of the formula, the paramters and the values
  public compute(parameters:Array<string>, formula: string, values: Array<string>): string {
    var fn = new Function(...parameters, "return " + formula);
    return this.roundUp((<number>fn(...values)).toString());
  }
}
