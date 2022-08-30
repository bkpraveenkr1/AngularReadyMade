import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AsyncCallChildComponent } from './async-call-child.component';

describe('AsyncCallChildComponent', () => {
  let component: AsyncCallChildComponent;
  let fixture: ComponentFixture<AsyncCallChildComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncCallChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncCallChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
