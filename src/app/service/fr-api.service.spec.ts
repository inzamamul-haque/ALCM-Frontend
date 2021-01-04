import { TestBed } from '@angular/core/testing';

import { FrApiService } from './fr-api.service';

describe('FrApiService', () => {
  let service: FrApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
