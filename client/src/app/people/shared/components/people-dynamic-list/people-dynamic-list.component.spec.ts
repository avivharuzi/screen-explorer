import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDynamicListComponent } from './people-dynamic-list.component';

describe('PeopleDynamicListComponent', () => {
  let component: PeopleDynamicListComponent;
  let fixture: ComponentFixture<PeopleDynamicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleDynamicListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDynamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
