import { Component, Input, OnInit } from '@angular/core';
import { Units } from 'src/app/models';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.sass']
})
export class DisplayResultComponent {
  @Input() public name:string = "";
  public value:string = "";
  @Input() public area:boolean = false;
  public displayValue: string = "";
  public units:Array<Units>;
  public unit:Units;

  constructor(private httpService: HttpService, private calculatorService: CalculatorService) {
    calculatorService.unitChosen$.subscribe(u => {
      this.unit = u;
    });
   }

  ngOnInit(): void {
    this.getUnits();
    if(this.area){
      this.calculatorService.area$.subscribe(c => {
        this.value = c;
        this.displayValue = c;
      });
    }else{
      this.calculatorService.perimeter$.subscribe(c => {
        this.value = c;
        this.displayValue = c;
      });
    }
  }

 

  changeValueUnit(conversion:Units['conversion'], to:string){
    if(this.name === "area"){
      var converter = <any>conversion.area;
      this.value = parseFloat((parseFloat(this.value) * parseFloat(converter[to])).toString()).toString();
      console.log(this.value);
      this.displayValue = this.calculatorService.roundUp(this.value);
    }else{
      var converter = <any>conversion.length;
      this.value = parseFloat((parseFloat(this.value) * parseFloat(converter[to])).toString()).toString();
      console.log(this.value);
      this.displayValue = this.calculatorService.roundUp(this.value);
    }
  }

  getUnits(): void{
    this.httpService.getUnits().subscribe((u: Array<Units>) => {
      this.units = u;
    });
  }
  
  selectUnit(event:string){
    var from = this.unit.id
    var id = event;
    var conversion = this.unit.conversion;
    this.unit = <Units> this.units.find((u)=> u.id === id);
    this.changeValueUnit(conversion, id);
  }

}
