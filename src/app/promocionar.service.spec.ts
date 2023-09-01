import { TestBed } from '@angular/core/testing';

import { PromocionarService } from './promocionar.service';

describe('PromocionarService', () => {
  let service: PromocionarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromocionarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
