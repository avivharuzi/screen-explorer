import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListPopularComponent } from './movie-list-popular.component';

describe('MovieListPopularComponent', () => {
  let component: MovieListPopularComponent;
  let fixture: ComponentFixture<MovieListPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListPopularComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
