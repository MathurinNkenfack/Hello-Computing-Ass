import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareObjectComponent } from './square-object.component';

describe('SquareObjectComponent', () => {
  let component: SquareObjectComponent;
  let fixture: ComponentFixture<SquareObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
