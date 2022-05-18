import { TestBed } from '@angular/core/testing';

import { FirestoreManagerService } from './firestore-manager.service';

describe('FirestoreManagerService', () => {
  let service: FirestoreManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
