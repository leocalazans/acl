import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextTournamentsComponent } from './next-tournaments.component';

describe('NextTournamentsComponent', () => {
  let component: NextTournamentsComponent;
  let fixture: ComponentFixture<NextTournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextTournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
