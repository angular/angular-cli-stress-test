/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service163Service } from './service-163.service';

describe('Service163Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service163Service]
    });
  });

  it('should ...', inject([Service163Service], (service: Service163Service) => {
    expect(service).toBeTruthy();
  }));
});
