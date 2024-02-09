import { TestBed } from '@angular/core/testing';

import { AuthorizePublishService } from './authorize-publish.service';

describe('AuthorizePublishService', () => {
  let service: AuthorizePublishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizePublishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
