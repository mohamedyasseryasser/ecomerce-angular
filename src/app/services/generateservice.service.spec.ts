import { TestBed } from '@angular/core/testing';

import { GenerateserviceService } from './generateservice.service';

describe('GenerateserviceService', () => {
  let service: GenerateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
