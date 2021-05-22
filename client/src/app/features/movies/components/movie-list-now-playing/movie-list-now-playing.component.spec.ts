import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MovieListNowPlayingComponent } from './movie-list-now-playing.component';

describe('MovieListNowPlayingComponent', () => {
  let component: MovieListNowPlayingComponent;
  let fixture: ComponentFixture<MovieListNowPlayingComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MovieListNowPlayingComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListNowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
