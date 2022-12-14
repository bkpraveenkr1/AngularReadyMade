import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimezoneChangeComponent } from './timezone-change.component';

describe('TimezoneChangeComponent', () => {
  let component: TimezoneChangeComponent;
  let fixture: ComponentFixture<TimezoneChangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimezoneChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimezoneChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
