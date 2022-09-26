import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaTriangleObjectComponent } from './ra-triangle-object.component';

describe('RaTriangleObjectComponent', () => {
  let component: RaTriangleObjectComponent;
  let fixture: ComponentFixture<RaTriangleObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaTriangleObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaTriangleObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
