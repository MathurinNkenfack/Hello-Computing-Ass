import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'equi-triangle-object',
  templateUrl: './equi-triangle-object.component.html',
  styleUrls: ['./equi-triangle-object.component.sass']
})
export class EquiTriangleObjectComponent implements OnInit {
  @Input() public a:string = "a";
  @Input() public unit:string = "m";
  constructor() { }

  ngOnInit(): void {
  }

}
