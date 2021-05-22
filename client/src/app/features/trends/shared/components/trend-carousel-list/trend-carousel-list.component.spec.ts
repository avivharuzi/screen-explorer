import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrendCarouselListComponent } from './trend-carousel-list.component';

describe('TrendCarouselListComponent', () => {
  let component: TrendCarouselListComponent;
  let fixture: ComponentFixture<TrendCarouselListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TrendCarouselListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendCarouselListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
