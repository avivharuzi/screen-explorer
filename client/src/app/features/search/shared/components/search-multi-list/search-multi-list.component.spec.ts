import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchMultiListComponent } from './search-multi-list.component';

describe('SearchMultiListComponent', () => {
  let component: SearchMultiListComponent;
  let fixture: ComponentFixture<SearchMultiListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SearchMultiListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMultiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
