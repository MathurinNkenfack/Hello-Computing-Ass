import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapeziumObjectComponent } from './trapezium-object.component';

describe('TrapeziumObjectComponent', () => {
  let component: TrapeziumObjectComponent;
  let fixture: ComponentFixture<TrapeziumObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrapeziumObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrapeziumObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
