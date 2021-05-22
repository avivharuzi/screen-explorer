import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TvShowListOnTheAirComponent } from './tv-show-list-on-the-air.component';

describe('TvShowListOnTheAirComponent', () => {
  let component: TvShowListOnTheAirComponent;
  let fixture: ComponentFixture<TvShowListOnTheAirComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TvShowListOnTheAirComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowListOnTheAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
