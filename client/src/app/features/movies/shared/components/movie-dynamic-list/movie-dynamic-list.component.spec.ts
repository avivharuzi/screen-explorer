import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDynamicListComponent } from './movie-dynamic-list.component';

describe('MovieDynamicListComponent', () => {
  let component: MovieDynamicListComponent;
  let fixture: ComponentFixture<MovieDynamicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDynamicListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDynamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
