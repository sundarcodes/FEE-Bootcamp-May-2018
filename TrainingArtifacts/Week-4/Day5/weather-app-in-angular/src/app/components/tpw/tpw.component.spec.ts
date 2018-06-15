import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpwComponent } from './tpw.component';

describe('TpwComponent', () => {
  let component: TpwComponent;
  let fixture: ComponentFixture<TpwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
