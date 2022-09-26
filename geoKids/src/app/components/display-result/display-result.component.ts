import { Component, Input, OnInit } from '@angular/core';
import { Units } from 'src/app/models';

@Component({
  selector: 'display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.sass']
})
export class DisplayResultComponent {
  @Input() public name:string = "";
  @Input() public value:string = "";
  @Input() public area:boolean = false;
  @Input() public units:Array<Units>;
  @Input() public unit:Units;
  constructor() { }

  ngOnInit(): void {
  }

  //round decimal number to four digits after decimal point if neccessary
  roundUp(n: string){
    if(n.indexOf(".")){
      var count = n.length -1 - n.indexOf(".");
      console.log(count);
      if(count <= 4){
        return n
      }else{
        return parseFloat(parseFloat(n).toFixed(4)).toString();
      }
    }else{
      return n;
    }
  }

  changeValueUnit(conversion:Units['conversion'], to:string){
    if(this.name === "area"){
      var converter = <any>conversion.area;
      this.value = this.roundUp((parseFloat(this.value) * parseFloat(converter[to])).toString());
    }else{
      var converter = <any>conversion.length;
      this.value = this.roundUp((parseFloat(this.value) * parseFloat(converter[to])).toString());
    }
  }
  
  selectUnit(event:string){
    var from = this.unit.id
    var id = event;
    var conversion = this.unit.conversion;
    this.unit = <Units> this.units.find((u)=> u.id === id);
    this.changeValueUnit(conversion, id);
  }

}
