import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TvShowItemComponent } from './tv-show-item.component';

describe('TvShowItemComponent', () => {
  let component: TvShowItemComponent;
  let fixture: ComponentFixture<TvShowItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TvShowItemComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
