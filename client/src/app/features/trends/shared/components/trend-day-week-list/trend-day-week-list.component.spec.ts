import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendDayWeekListComponent } from './trend-day-week-list.component';

describe('TrendDayWeekListComponent', () => {
  let component: TrendDayWeekListComponent;
  let fixture: ComponentFixture<TrendDayWeekListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendDayWeekListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendDayWeekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
