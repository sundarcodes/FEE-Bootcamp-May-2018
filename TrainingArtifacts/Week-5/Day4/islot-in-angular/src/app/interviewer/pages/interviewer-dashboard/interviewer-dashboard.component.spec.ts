import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerDashboardComponent } from './interviewer-dashboard.component';

describe('InterviewerDashboardComponent', () => {
  let component: InterviewerDashboardComponent;
  let fixture: ComponentFixture<InterviewerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
