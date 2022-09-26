import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.sass']
})
export class InputFieldComponent {
  public group: FormGroup;
  @Input() public parameter:string;
  @Input() public value:string = "0";
  @Output() onKeyUp = new EventEmitter<Event>();
  @Output() onValid = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    this.setGroup();
  }

  get controller(){
    return this.group.get(this.parameter);
  }
 
  keyUp(event: Event){
    if(this.controller?.valid){
      this.onKeyUp.emit(event);
    }
    this.onValid.emit(this.controller?.valid);
  }
  setGroup(){
    var pattern = '(([.]([1-9]|([0-9]*)([1-9]+)))|(([0-9]|[1-9]+([0-9]*))(([.]([1-9]|([0-9]*)([1-9]+)))?)))';
    var controler = new FormControl(this.value, [Validators.required, Validators.pattern(pattern)]);
    this.group = new FormGroup({[this.parameter]: controler });
  }

}
