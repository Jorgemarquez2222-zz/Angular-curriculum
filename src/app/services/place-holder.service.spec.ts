/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlaceHolderService } from './place-holder.service';

describe('Service: PlaceHolder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceHolderService]
    });
  });

  it('should ...', inject([PlaceHolderService], (service: PlaceHolderService) => {
    expect(service).toBeTruthy();
  }));
});
