import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIntroductionComponent } from './menu-introduction.component';

describe('MenuIntroductionComponent', () => {
  let component: MenuIntroductionComponent;
  let fixture: ComponentFixture<MenuIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
