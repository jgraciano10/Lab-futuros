import { TestBed } from '@angular/core/testing';

import { ShowReservadoService } from './show-reservado.service';

describe('ShowReservadoService', () => {
  let service: ShowReservadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowReservadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
