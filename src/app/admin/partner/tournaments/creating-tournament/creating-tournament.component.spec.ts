import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingTournamentComponent } from './creating-tournament.component';

describe('CreatingTournamentComponent', () => {
  let component: CreatingTournamentComponent;
  let fixture: ComponentFixture<CreatingTournamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingTournamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingTournamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
