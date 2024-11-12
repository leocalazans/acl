import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextTournamentComponent } from './next-tournament.component';

describe('NextTournamentComponent', () => {
  let component: NextTournamentComponent;
  let fixture: ComponentFixture<NextTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
