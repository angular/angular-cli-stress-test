/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service208Service } from './service-208.service';

describe('Service208Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service208Service]
    });
  });

  it('should ...', inject([Service208Service], (service: Service208Service) => {
    expect(service).toBeTruthy();
  }));
});
