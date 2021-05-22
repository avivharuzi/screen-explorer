import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GenreListComponent } from './genre-list.component';

describe('GenreListComponent', () => {
  let component: GenreListComponent;
  let fixture: ComponentFixture<GenreListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [GenreListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
