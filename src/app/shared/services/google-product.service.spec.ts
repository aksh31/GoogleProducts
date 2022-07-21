import { TestBed } from '@angular/core/testing';

import { GoogleProductService } from './google-product.service';

describe('GoogleProductService', () => {
  let service: GoogleProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
