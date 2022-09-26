import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaTriangleObjectComponent } from './sca-triangle-object.component';

describe('ScaTriangleObjectComponent', () => {
  let component: ScaTriangleObjectComponent;
  let fixture: ComponentFixture<ScaTriangleObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaTriangleObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScaTriangleObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
