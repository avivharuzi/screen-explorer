import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvCardListComponent } from './tv-card-list.component';

describe('TvCardListComponent', () => {
  let component: TvCardListComponent;
  let fixture: ComponentFixture<TvCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvCardListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
