import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'ra-triangle-object',
  templateUrl: './ra-triangle-object.component.html',
  styleUrls: ['./ra-triangle-object.component.sass']
})
export class RaTriangleObjectComponent implements OnInit {
  @Input() public b:string = "b";
  @Input() public c:string = "c";
  @Input() public h:string = "h";
  public unit:string = "m";
  constructor(private calculatorService: CalculatorService) {
    calculatorService.unitChosen$.subscribe(u => {
      this.unit = u.id;
    });
   }

  ngOnInit(): void {
  }

}
