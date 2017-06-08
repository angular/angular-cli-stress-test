/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service254Service } from './service-254.service';

describe('Service254Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service254Service]
    });
  });

  it('should ...', inject([Service254Service], (service: Service254Service) => {
    expect(service).toBeTruthy();
  }));
});
