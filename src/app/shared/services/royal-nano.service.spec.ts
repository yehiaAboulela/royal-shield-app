import { TestBed } from '@angular/core/testing';

import { RoyalNanoService } from './royal-nano.service';

describe('RoyalNanoService', () => {
  let service: RoyalNanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoyalNanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
