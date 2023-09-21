import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercepcionAlertComponent } from './percepcion-alert.component';

describe('PercepcionAlertComponent', () => {
  let component: PercepcionAlertComponent;
  let fixture: ComponentFixture<PercepcionAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercepcionAlertComponent]
    });
    fixture = TestBed.createComponent(PercepcionAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
