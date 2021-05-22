import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimelineContainerComponent } from './timeline-container.component';

describe('TimelineContainerComponent', () => {
  let component: TimelineContainerComponent;
  let fixture: ComponentFixture<TimelineContainerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TimelineContainerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
