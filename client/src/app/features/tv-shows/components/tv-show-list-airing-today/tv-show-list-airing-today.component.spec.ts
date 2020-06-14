import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowListAiringTodayComponent } from './tv-show-list-airing-today.component';

describe('TvShowListAiringTodayComponent', () => {
  let component: TvShowListAiringTodayComponent;
  let fixture: ComponentFixture<TvShowListAiringTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowListAiringTodayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowListAiringTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
