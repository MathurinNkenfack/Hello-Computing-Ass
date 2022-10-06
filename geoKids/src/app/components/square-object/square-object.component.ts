import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'square-object',
  templateUrl: './square-object.component.html',
  styleUrls: ['./square-object.component.sass'],
})
export class SquareObjectComponent implements OnInit {
  @Input() public s:string = "s";
  public unit:string = "m";
  constructor(private calculatorService: CalculatorService) {
    calculatorService.unitChosen$.subscribe(u => {
      this.unit = u.id;
    });
   }

  ngOnInit(): void {
  }

}
