import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoTriangleObjectComponent } from './iso-triangle-object.component';

describe('IsoTriangleObjectComponent', () => {
  let component: IsoTriangleObjectComponent;
  let fixture: ComponentFixture<IsoTriangleObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsoTriangleObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsoTriangleObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
