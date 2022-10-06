import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'rectangle-object',
  templateUrl: './rectangle-object.component.html',
  styleUrls: ['./rectangle-object.component.sass']
})
export class RectangleObjectComponent implements OnInit {
  @Input() public l:string = "l";
  @Input() public w:string = "w";
  public unit:string = "m";
  constructor(private calculatorService: CalculatorService) {
    calculatorService.unitChosen$.subscribe(u => {
      this.unit = u.id;
    });
   }

  ngOnInit(): void {
  }

}
