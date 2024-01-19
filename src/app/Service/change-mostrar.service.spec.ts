import { TestBed } from '@angular/core/testing';

import { ChangeMostrarService } from './change-mostrar.service';

describe('ChangeMostrarService', () => {
  let service: ChangeMostrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeMostrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
