import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineanalysisComponent } from './onlineanalysis.component';

describe('OnlineanalysisComponent', () => {
  let component: OnlineanalysisComponent;
  let fixture: ComponentFixture<OnlineanalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineanalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
