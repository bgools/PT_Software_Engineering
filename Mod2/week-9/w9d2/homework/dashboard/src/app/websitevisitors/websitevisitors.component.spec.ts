import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitevisitorsComponent } from './websitevisitors.component';

describe('WebsitevisitorsComponent', () => {
  let component: WebsitevisitorsComponent;
  let fixture: ComponentFixture<WebsitevisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitevisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitevisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
