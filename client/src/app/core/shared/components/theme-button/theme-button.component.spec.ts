import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeButtonComponent } from './theme-button.component';

describe('ThemeButtonComponent', () => {
  let component: ThemeButtonComponent;
  let fixture: ComponentFixture<ThemeButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ThemeButtonComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
