import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxBannerComponent } from './paralax-banner.component';

describe('ParalaxBannerComponent', () => {
  let component: ParalaxBannerComponent;
  let fixture: ComponentFixture<ParalaxBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParalaxBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
