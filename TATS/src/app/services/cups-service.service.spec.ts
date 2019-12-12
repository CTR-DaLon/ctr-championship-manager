import { TestBed } from '@angular/core/testing';

import { CupsServiceService } from './cups-service.service';

describe('CupsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CupsServiceService = TestBed.get(CupsServiceService);
    expect(service).toBeTruthy();
  });
});
