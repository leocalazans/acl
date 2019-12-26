import { TestBed } from '@angular/core/testing';

import { matchDataService } from './match-data.service';

describe('matchDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: matchDataService = TestBed.get(matchDataService);
    expect(service).toBeTruthy();
  });
});
