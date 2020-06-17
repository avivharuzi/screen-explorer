import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMultiFormComponent } from './search-multi-form.component';

describe('SearchMultiFormComponent', () => {
  let component: SearchMultiFormComponent;
  let fixture: ComponentFixture<SearchMultiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMultiFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMultiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
