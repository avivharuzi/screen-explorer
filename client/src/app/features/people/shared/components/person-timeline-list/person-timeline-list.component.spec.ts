import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonTimelineListComponent } from './person-timeline-list.component';

describe('PersonTimelineListComponent', () => {
  let component: PersonTimelineListComponent;
  let fixture: ComponentFixture<PersonTimelineListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [PersonTimelineListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTimelineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
