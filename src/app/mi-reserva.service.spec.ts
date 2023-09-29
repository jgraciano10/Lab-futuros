import { TestBed } from '@angular/core/testing';

import { MiReservaService } from './mi-reserva.service';

describe('MiReservaService', () => {
  let service: MiReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
