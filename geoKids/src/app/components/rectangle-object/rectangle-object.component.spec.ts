import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleObjectComponent } from './rectangle-object.component';

describe('RectangleObjectComponent', () => {
  let component: RectangleObjectComponent;
  let fixture: ComponentFixture<RectangleObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangleObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectangleObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
