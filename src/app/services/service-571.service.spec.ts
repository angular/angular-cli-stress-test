/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service571Service } from './service-571.service';

describe('Service571Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service571Service]
    });
  });

  it('should ...', inject([Service571Service], (service: Service571Service) => {
    expect(service).toBeTruthy();
  }));
});
