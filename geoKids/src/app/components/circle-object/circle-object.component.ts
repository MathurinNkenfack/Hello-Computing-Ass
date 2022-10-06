import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'circle-object',
  templateUrl: './circle-object.component.html',
  styleUrls: ['./circle-object.component.sass']
})
export class CircleObjectComponent implements OnInit {
  @Input() public r:string = "r";
  public unit:string = "m";
  constructor(private calculatorService: CalculatorService) {
    calculatorService.unitChosen$.subscribe(u => {
      this.unit = u.id;
    });
   }

  ngOnInit(): void {
  }

}
