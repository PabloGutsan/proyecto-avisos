import { TestBed } from '@angular/core/testing';

import { ReoverPasswordService } from './reover-password.service';

describe('ReoverPasswordService', () => {
  let service: ReoverPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReoverPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
