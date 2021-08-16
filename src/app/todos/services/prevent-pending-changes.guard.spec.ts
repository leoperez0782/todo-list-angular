import { TestBed } from '@angular/core/testing';

import { PreventPendingChangesGuard } from './prevent-pending-changes.guard';

describe('PreventPendingChangesGuard', () => {
  let guard: PreventPendingChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreventPendingChangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
