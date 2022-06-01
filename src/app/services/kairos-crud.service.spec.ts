import { TestBed } from '@angular/core/testing';

import { KairosCRUDService } from './kairos-crud.service';

describe('KairosCRUDService', () => {
  let service: KairosCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KairosCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
