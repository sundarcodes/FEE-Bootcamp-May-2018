import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewerSignupComponent } from './interviewer-signup.component';

describe('InterviewerSignupComponent', () => {
  let component: InterviewerSignupComponent;
  let fixture: ComponentFixture<InterviewerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
