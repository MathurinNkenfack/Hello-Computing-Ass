import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'iso-triangle-object',
  templateUrl: './iso-triangle-object.component.html',
  styleUrls: ['./iso-triangle-object.component.sass']
})
export class IsoTriangleObjectComponent implements OnInit {
  @Input() public a:string = "a";
  @Input() public b:string = "b";
  public unit:string = "m";
  constructor(private calculatorService: CalculatorService) {
    calculatorService.unitChosen$.subscribe(u => {
      this.unit = u.id;
    });
   }

  ngOnInit(): void {
  }

}
