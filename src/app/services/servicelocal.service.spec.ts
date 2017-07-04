/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicelocalService } from './servicelocal.service';

describe('Service: Servicelocal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicelocalService]
    });
  });

  it('should ...', inject([ServicelocalService], (service: ServicelocalService) => {
    expect(service).toBeTruthy();
  }));
});
