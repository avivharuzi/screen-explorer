import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TvShowListAiringTodayComponent } from './tv-show-list-airing-today.component';

describe('TvShowListAiringTodayComponent', () => {
  let component: TvShowListAiringTodayComponent;
  let fixture: ComponentFixture<TvShowListAiringTodayComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TvShowListAiringTodayComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowListAiringTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
