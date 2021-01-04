import { TestBed } from '@angular/core/testing';

import { BrApiService } from './br-api.service';

describe('BrApiService', () => {
  let service: BrApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
