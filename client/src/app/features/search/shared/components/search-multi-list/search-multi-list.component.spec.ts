import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMultiListComponent } from './search-multi-list.component';

describe('SearchMultiListComponent', () => {
  let component: SearchMultiListComponent;
  let fixture: ComponentFixture<SearchMultiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMultiListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMultiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
