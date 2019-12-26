import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSitetesteSiteComponent } from './register-siteteste-site.component';

describe('RegisterSitetesteSiteComponent', () => {
  let component: RegisterSitetesteSiteComponent;
  let fixture: ComponentFixture<RegisterSitetesteSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSitetesteSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSitetesteSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
