import { TestBed } from '@angular/core/testing';

import { CountrysvService } from './countrysv.service';

describe('CountrysvService', () => {
  let service: CountrysvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrysvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
