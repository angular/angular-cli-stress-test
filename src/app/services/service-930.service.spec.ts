/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service930Service } from './service-930.service';

describe('Service930Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service930Service]
    });
  });

  it('should ...', inject([Service930Service], (service: Service930Service) => {
    expect(service).toBeTruthy();
  }));
});
