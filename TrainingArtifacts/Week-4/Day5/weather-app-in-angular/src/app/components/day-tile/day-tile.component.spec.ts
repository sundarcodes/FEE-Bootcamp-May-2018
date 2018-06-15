import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayTileComponent } from './day-tile.component';

describe('DayTileComponent', () => {
  let component: DayTileComponent;
  let fixture: ComponentFixture<DayTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
