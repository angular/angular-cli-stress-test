/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service469Service } from './service-469.service';

describe('Service469Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service469Service]
    });
  });

  it('should ...', inject([Service469Service], (service: Service469Service) => {
    expect(service).toBeTruthy();
  }));
});
