import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPagesComponent } from './banner-pages.component';

describe('BannerPagesComponent', () => {
  let component: BannerPagesComponent;
  let fixture: ComponentFixture<BannerPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
