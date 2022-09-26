import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { Geometry, Units } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {
  public geometries: Array<Geometry>;
  public units: Array<Units>;
  public geometrySelected: boolean = false;
  public evaluate: boolean = false;
  public geometry: Geometry;
  public unit: Units;
  public unitSelected: boolean = false;
  public parameters:any = {};
  public parametersValid:any = {};
  public allValid = false;
  
  constructor(private httpService: HttpService) { 
  }

  ngOnInit(): void {
      this.getGeometries();
      this.getUnits();
  }

  
  
  getData(event: Event){
    var element = event.target as HTMLInputElement;
    this.parameters[element.name] = element.value
    this.evaluate = false;
  }

  validation(event:boolean, parameter: string){
    this.parametersValid[parameter] = event;
    this.testValid();
  }

  testValid(){
    var result = true;
    for(let i =0; i < this.geometry.parameter.length; i++){
      result = result && this.parametersValid[this.geometry.parameter[i]]
    }
    this.allValid = result;
  }

  submit(){
    if(this.allValid){
      this.evaluate = true;
    }
    
  }

  calculateArea(): string{
    var areaFn = new Function(...this.geometry.area.parameter, "return " + this.geometry.area.formula);
    var p = [];
    for(let i = 0; i < this.geometry.area.parameter.length; i++){
      p.push(this.parameters[this.geometry.area.parameter[i]]);
    }
    var result = (<Number>areaFn(...p)).toString();
    console.log(result);
    return this.roundUp(result);
  }
  calculatePerimeter(): string{
    var perimeterFn = new Function(...this.geometry.perimeter.parameter, "return " + this.geometry.perimeter.formula);
    var p = [];
    for(let i = 0; i < this.geometry.perimeter.parameter.length; i++){
      p.push(this.parameters[this.geometry.perimeter.parameter[i]]);
    }
    var result = (<number>perimeterFn(...p)).toString();
    console.log(result);
    return this.roundUp(result);
  }

  setParameters(){
    var params = {};
    var valid = {};
    for(let i =0; i < this.geometry.parameter.length; i++){
      params = {
        ...params,
        [this.geometry.parameter[i]]:null
      }
      valid = {
        ...valid,
        [this.geometry.parameter[i]]: false
      }
    }
    this.parameters = params;
    this.parametersValid = valid;
  }



  selectGeometry(event: string){
    var id = event;
    this.geometry = <Geometry> this.geometries.find((g)=> g.id === id);
    this.geometrySelected = true;
    this.allValid = false
    this.evaluate = false;
  }

  //round decimal number to 4 digits after decimal point if neccessary
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

  changeParameterUnits(from:string, to:string){
    try{
      var u1 = this.units.find((u)=>u.id === from);
      var u2 = this.units.find((y)=> y.id == to);
      if(u1 && u2){
        var conversion = <any>u1.conversion.length;
        var value = <string>conversion[to];
        var keys = Object.keys(this.parameters);
        keys.forEach((k)=>{
          if(this.parameters[k] !== null){
            var result = (parseFloat(this.parameters[k])*parseFloat(value)).toString()
            this.parameters[k] = this.roundUp(result);
          }  
        })
      }else{
        throw "the unit passed does not exist";
      }
    }catch(err){
      console.log(err)
    }
    
  }

  selectUnit(event: string){
    var from = this.unit.id
    var id = event;
    this.unit = <Units> this.units.find((u)=> u.id === id);
    this.changeParameterUnits(from, id);
    
  }

  getGeometries(): void{
    this.httpService.getGeometries().subscribe((g: Array<Geometry>) => {
    this.geometries = g;
    this.geometry = g[0];
    this.geometrySelected = true;
    })
  }
  getUnits(): void{
    this.httpService.getUnits().subscribe((u: Array<Units>) => {
      this.units = u;
      this.unit = <Units>u.find((el)=>el.id ==="m");
      this.unitSelected = true;
    });
  }
}
