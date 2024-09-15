import { TestBed } from '@angular/core/testing';

import { AzureService } from './azure.service';

describe('AzureService', () => {
  let service: AzureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
