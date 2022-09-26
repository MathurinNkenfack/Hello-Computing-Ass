import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ra-triangle-object',
  templateUrl: './ra-triangle-object.component.html',
  styleUrls: ['./ra-triangle-object.component.sass']
})
export class RaTriangleObjectComponent implements OnInit {
  @Input() public b:string = "b";
  @Input() public c:string = "c";
  @Input() public h:string = "h";
  @Input() public unit:string = "m";
  constructor() { }

  ngOnInit(): void {
  }

}
