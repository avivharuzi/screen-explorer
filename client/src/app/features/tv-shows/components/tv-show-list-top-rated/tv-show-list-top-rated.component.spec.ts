import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowListTopRatedComponent } from './tv-show-list-top-rated.component';

describe('TvShowListTopRatedComponent', () => {
  let component: TvShowListTopRatedComponent;
  let fixture: ComponentFixture<TvShowListTopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowListTopRatedComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowListTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
