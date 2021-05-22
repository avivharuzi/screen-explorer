import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrendDayWeekListComponent } from './trend-day-week-list.component';

describe('TrendDayWeekListComponent', () => {
  let component: TrendDayWeekListComponent;
  let fixture: ComponentFixture<TrendDayWeekListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TrendDayWeekListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendDayWeekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
