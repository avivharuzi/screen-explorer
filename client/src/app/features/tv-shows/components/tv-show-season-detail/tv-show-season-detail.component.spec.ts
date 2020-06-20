import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowSeasonDetailComponent } from './tv-show-season-detail.component';

describe('TvShowSeasonDetailComponent', () => {
  let component: TvShowSeasonDetailComponent;
  let fixture: ComponentFixture<TvShowSeasonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowSeasonDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowSeasonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
