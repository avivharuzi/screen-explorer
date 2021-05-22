import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroStatsComponent } from './hero-stats.component';

describe('HeroStatsComponent', () => {
  let component: HeroStatsComponent;
  let fixture: ComponentFixture<HeroStatsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HeroStatsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
