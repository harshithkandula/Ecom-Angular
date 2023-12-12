import { TestBed } from '@angular/core/testing';

import { Productv4Service } from './productv4.service';

describe('Productv4Service', () => {
  let service: Productv4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productv4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
