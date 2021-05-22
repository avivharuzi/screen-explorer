import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonListPopularComponent } from './person-list-popular.component';

describe('PersonListPopularComponent', () => {
  let component: PersonListPopularComponent;
  let fixture: ComponentFixture<PersonListPopularComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PersonListPopularComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonListPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
