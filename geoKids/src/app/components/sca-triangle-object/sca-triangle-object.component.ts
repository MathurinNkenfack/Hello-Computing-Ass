import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'sca-triangle-object',
  templateUrl: './sca-triangle-object.component.html',
  styleUrls: ['./sca-triangle-object.component.sass']
})
export class ScaTriangleObjectComponent implements OnInit {
  @Input() public a:string = "a";
  @Input() public b:string = "b";
  @Input() public c:string = "c";
  public unit:string = "m";
  constructor(private calculatorService: CalculatorService) {
    calculatorService.unitChosen$.subscribe(u => {
      this.unit = u.id;
    });
   }

  ngOnInit(): void {
  }

}
