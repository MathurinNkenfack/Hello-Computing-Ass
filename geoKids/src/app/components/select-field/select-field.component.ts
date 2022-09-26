import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.sass']
})
export class SelectFieldComponent implements OnInit {
  @Input() public name:string = "";
  @Input() public cyName:string = "";
  @Input() public first:string = "";
  @Input() public area:boolean = false;
  @Input() public idName:boolean = false;
  @Input() public options:Array<any>;
  @Output() onSelect = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  selectOption(event: Event){
    var id = (event.target as HTMLSelectElement).value
    this.onSelect.emit(id);
  }

}
