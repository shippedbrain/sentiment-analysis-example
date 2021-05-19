import { TestBed } from '@angular/core/testing';

import { PredictionService } from './prediction-service.service';

describe('PredictionServiceService', () => {
  let service: PredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
