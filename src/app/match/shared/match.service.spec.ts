import { TestBed } from '@angular/core/testing';

import { matchService } from './match.service';

describe('matchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: matchService = TestBed.get(matchService);
    expect(service).toBeTruthy();
  });
});
