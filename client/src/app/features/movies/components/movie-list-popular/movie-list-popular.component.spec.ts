import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MovieListPopularComponent } from './movie-list-popular.component';

describe('MovieListPopularComponent', () => {
  let component: MovieListPopularComponent;
  let fixture: ComponentFixture<MovieListPopularComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MovieListPopularComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
