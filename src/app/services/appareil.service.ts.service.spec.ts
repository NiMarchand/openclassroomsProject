/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Appareil.service.tsService } from './appareil.service.ts.service';

describe('Service: Appareil.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Appareil.service.tsService]
    });
  });

  it('should ...', inject([Appareil.service.tsService], (service: Appareil.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
