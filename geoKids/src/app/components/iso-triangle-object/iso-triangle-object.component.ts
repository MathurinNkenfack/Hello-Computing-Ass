import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iso-triangle-object',
  templateUrl: './iso-triangle-object.component.html',
  styleUrls: ['./iso-triangle-object.component.sass']
})
export class IsoTriangleObjectComponent implements OnInit {
  @Input() public a:string = "a";
  @Input() public b:string = "b";
  @Input() public unit:string = "m";
  constructor() { }

  ngOnInit(): void {
  }

}
