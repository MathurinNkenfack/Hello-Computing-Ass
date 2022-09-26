import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'square-object',
  templateUrl: './square-object.component.html',
  styleUrls: ['./square-object.component.sass']
})
export class SquareObjectComponent implements OnInit {
  @Input() public s:string = "s";
  @Input() public unit:string = "m";
  constructor() { }

  ngOnInit(): void {
  }

}
