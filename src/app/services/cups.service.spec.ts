import { TestBed } from '@angular/core/testing';

import { CupsService } from './cups.service'

describe('CupsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CupsService = TestBed.get(CupsService);
    expect(service).toBeTruthy();
  });
});
