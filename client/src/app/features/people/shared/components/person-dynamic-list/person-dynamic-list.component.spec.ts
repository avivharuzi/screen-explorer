import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonDynamicListComponent } from './person-dynamic-list.component';

describe('PersonDynamicListComponent', () => {
  let component: PersonDynamicListComponent;
  let fixture: ComponentFixture<PersonDynamicListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PersonDynamicListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDynamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
