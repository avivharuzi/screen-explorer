import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowListPopularComponent } from './tv-show-list-popular.component';

describe('TvShowListPopularComponent', () => {
  let component: TvShowListPopularComponent;
  let fixture: ComponentFixture<TvShowListPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowListPopularComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowListPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
