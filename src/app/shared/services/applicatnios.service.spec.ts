import { TestBed } from '@angular/core/testing';

import { ApplicatniosService } from './applicatnios.service';

describe('ApplicatniosService', () => {
  let service: ApplicatniosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicatniosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
