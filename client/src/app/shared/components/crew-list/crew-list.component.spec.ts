import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrewListComponent } from './crew-list.component';

describe('CrewListComponent', () => {
  let component: CrewListComponent;
  let fixture: ComponentFixture<CrewListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CrewListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
