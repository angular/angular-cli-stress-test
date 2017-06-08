/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service14Service } from './service-14.service';

describe('Service14Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service14Service]
    });
  });

  it('should ...', inject([Service14Service], (service: Service14Service) => {
    expect(service).toBeTruthy();
  }));
});
