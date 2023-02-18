import { TestBed } from '@angular/core/testing';

import { TableDataProviderService } from './table-data-provider.service';

describe('TableDataProviderService', () => {
  let service: TableDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
