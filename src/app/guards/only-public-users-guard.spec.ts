import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { onlyPublicUsersGuard } from './only-public-users-guard';

describe('onlyPublicUsersGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onlyPublicUsersGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
