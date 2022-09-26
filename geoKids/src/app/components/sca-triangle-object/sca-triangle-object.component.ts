import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sca-triangle-object',
  templateUrl: './sca-triangle-object.component.html',
  styleUrls: ['./sca-triangle-object.component.sass']
})
export class ScaTriangleObjectComponent implements OnInit {
  @Input() public a:string = "a";
  @Input() public b:string = "b";
  @Input() public c:string = "c";
  @Input() public unit:string = "m";
  constructor() { }

  ngOnInit(): void {
  }

}
