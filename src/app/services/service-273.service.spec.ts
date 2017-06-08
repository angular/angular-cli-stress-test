/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service273Service } from './service-273.service';

describe('Service273Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service273Service]
    });
  });

  it('should ...', inject([Service273Service], (service: Service273Service) => {
    expect(service).toBeTruthy();
  }));
});
