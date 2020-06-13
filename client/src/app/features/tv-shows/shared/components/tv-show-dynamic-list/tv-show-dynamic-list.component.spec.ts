import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowDynamicListComponent } from './tv-show-dynamic-list.component';

describe('TvShowDynamicListComponent', () => {
  let component: TvShowDynamicListComponent;
  let fixture: ComponentFixture<TvShowDynamicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowDynamicListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowDynamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
