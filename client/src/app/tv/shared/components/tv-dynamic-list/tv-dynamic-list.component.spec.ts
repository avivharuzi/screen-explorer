import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDynamicListComponent } from './tv-dynamic-list.component';

describe('TvDynamicListComponent', () => {
  let component: TvDynamicListComponent;
  let fixture: ComponentFixture<TvDynamicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TvDynamicListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDynamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
