import { TestBed } from '@angular/core/testing';

import { ReservasMartesService } from './reservas-martes.service';

describe('ReservasMartesService', () => {
  let service: ReservasMartesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservasMartesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
