import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalRowComponent } from './detal-row.component';

describe('DetalRowComponent', () => {
  let component: DetalRowComponent;
  let fixture: ComponentFixture<DetalRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
