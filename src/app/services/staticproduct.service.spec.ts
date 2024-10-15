import { TestBed } from '@angular/core/testing';

import { StaticproductService } from './staticproduct.service';

describe('StaticproductService', () => {
  let service: StaticproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
