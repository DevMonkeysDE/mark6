import { TestBed } from '@angular/core/testing';

import { Mark6LibService } from './mark6-lib.service';

describe('Mark6LibService', () => {
  let service: Mark6LibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mark6LibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
