import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonItemComponent } from './person-item.component';

describe('PersonItemComponent', () => {
  let component: PersonItemComponent;
  let fixture: ComponentFixture<PersonItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PersonItemComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
