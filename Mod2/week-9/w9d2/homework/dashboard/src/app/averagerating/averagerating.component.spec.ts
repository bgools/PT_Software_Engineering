import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageratingComponent } from './averagerating.component';

describe('AverageratingComponent', () => {
  let component: AverageratingComponent;
  let fixture: ComponentFixture<AverageratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
