import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TvShowListTopRatedComponent } from './tv-show-list-top-rated.component';

describe('TvShowListTopRatedComponent', () => {
  let component: TvShowListTopRatedComponent;
  let fixture: ComponentFixture<TvShowListTopRatedComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TvShowListTopRatedComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowListTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
