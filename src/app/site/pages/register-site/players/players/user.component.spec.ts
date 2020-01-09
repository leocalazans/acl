import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersRegisterComponent } from './players.component';

describe('PlayersRegisterComponent', () => {
  let component: PlayersRegisterComponent;
  let fixture: ComponentFixture<PlayersRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
