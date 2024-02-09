import { TestBed } from '@angular/core/testing';

import { MyPublicationsService } from './my-publications.service';

describe('MyPublicationsService', () => {
  let service: MyPublicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPublicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
