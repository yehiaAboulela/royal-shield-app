import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { warrantyGuard } from './warranty.guard';

describe('warrantyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => warrantyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
