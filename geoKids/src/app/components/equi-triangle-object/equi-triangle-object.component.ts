import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'equi-triangle-object',
  templateUrl: './equi-triangle-object.component.html',
  styleUrls: ['./equi-triangle-object.component.sass']
})
export class EquiTriangleObjectComponent implements OnInit {
  @Input() public a:string = "a";
  public unit:string = "m";
  constructor(private calculatorService: CalculatorService) {
    calculatorService.unitChosen$.subscribe(u => {
      this.unit = u.id;
    });
   }

  ngOnInit(): void {
  }

}
