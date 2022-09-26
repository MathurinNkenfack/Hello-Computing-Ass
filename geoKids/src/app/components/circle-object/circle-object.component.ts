import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'circle-object',
  templateUrl: './circle-object.component.html',
  styleUrls: ['./circle-object.component.sass']
})
export class CircleObjectComponent implements OnInit {
  @Input() public r:string = "r";
  @Input() public unit:string = "m";
  constructor() { }

  ngOnInit(): void {
  }

}
