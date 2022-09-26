import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rectangle-object',
  templateUrl: './rectangle-object.component.html',
  styleUrls: ['./rectangle-object.component.sass']
})
export class RectangleObjectComponent implements OnInit {
  @Input() public l:string = "l";
  @Input() public w:string = "w";
  @Input() public unit:string = "m";
  constructor() { }

  ngOnInit(): void {
  }

}
