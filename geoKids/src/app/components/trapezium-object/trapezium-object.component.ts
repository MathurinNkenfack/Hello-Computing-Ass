import { Component, Input, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator/calculator.service';

@Component({
  selector: 'trapezium-object',
  templateUrl: './trapezium-object.component.html',
  styleUrls: ['./trapezium-object.component.sass']
})
export class TrapeziumObjectComponent implements OnInit {
  @Input() public a:string = "a";
  @Input() public b:string = "b";
  @Input() public c:string = "c";
  @Input() public d:string = "d";
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
