import { TestBed } from '@angular/core/testing';

import { CitysvService } from './citysv.service';

describe('CitysvService', () => {
  let service: CitysvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitysvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
