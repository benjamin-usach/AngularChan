import { TestBed } from '@angular/core/testing';

import { ChanService } from './chan.service';

describe('ChanService', () => {
  let service: ChanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
