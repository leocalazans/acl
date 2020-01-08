import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSiteComponent } from './menu-site.component';

describe('MenuSiteComponent', () => {
  let component: MenuSiteComponent;
  let fixture: ComponentFixture<MenuSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
