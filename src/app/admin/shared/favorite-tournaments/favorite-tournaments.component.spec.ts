import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTournamentsComponent } from './favorite-tournaments.component';

describe('FavoriteTournamentsComponent', () => {
  let component: FavoriteTournamentsComponent;
  let fixture: ComponentFixture<FavoriteTournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteTournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
