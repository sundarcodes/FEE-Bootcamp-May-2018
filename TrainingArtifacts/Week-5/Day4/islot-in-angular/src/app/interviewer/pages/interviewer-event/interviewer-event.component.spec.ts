import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerEventComponent } from './interviewer-event.component';

describe('InterviewerEventComponent', () => {
  let component: InterviewerEventComponent;
  let fixture: ComponentFixture<InterviewerEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
