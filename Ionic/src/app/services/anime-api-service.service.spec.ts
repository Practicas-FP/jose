import { TestBed } from '@angular/core/testing';

import { AnimeApiServiceService } from './anime-api-service.service';

describe('AnimeApiServiceService', () => {
  let service: AnimeApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
