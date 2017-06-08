/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service952Service } from './service-952.service';

describe('Service952Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service952Service]
    });
  });

  it('should ...', inject([Service952Service], (service: Service952Service) => {
    expect(service).toBeTruthy();
  }));
});
