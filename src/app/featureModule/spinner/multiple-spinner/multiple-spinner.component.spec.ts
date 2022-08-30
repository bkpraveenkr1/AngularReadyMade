import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultipleSpinnerComponent } from './multiple-spinner.component';

describe('MultipleSpinnerComponent', () => {
  let component: MultipleSpinnerComponent;
  let fixture: ComponentFixture<MultipleSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
