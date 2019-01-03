import { TestBed } from '@angular/core/testing';

import { EndPointService } from './endpoint.service';

describe('EndpointService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndPointService = TestBed.get(EndPointService);
    expect(service).toBeTruthy();
  });
});
