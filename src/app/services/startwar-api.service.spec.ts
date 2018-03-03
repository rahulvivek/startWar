import { TestBed, inject } from '@angular/core/testing';

import { StartwarApiService } from './startwar-api.service';

describe('StartwarApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartwarApiService]
    });
  });

  it('should be created', inject([StartwarApiService], (service: StartwarApiService) => {
    expect(service).toBeTruthy();
  }));
});
