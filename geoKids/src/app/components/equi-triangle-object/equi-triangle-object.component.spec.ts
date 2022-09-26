import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiTriangleObjectComponent } from './equi-triangle-object.component';

describe('EquiTriangleObjectComponent', () => {
  let component: EquiTriangleObjectComponent;
  let fixture: ComponentFixture<EquiTriangleObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquiTriangleObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiTriangleObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
