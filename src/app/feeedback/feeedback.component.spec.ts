import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeedbackComponent } from './feeedback.component';

describe('FeeedbackComponent', () => {
  let component: FeeedbackComponent;
  let fixture: ComponentFixture<FeeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeeedbackComponent]
    });
    fixture = TestBed.createComponent(FeeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
